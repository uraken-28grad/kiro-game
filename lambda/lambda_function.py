import json
import base64
import logging
import boto3

logger = logging.getLogger()
logger.setLevel(logging.INFO)

bedrock_runtime = boto3.client("bedrock-runtime", region_name="ap-northeast-1")

SYSTEM_PROMPT = """あなたは2Dプラットフォーマーゲームのアドバイザーです。
プレイヤーがゲームオーバーになった時のスクリーンショットを分析し、短いアドバイスを日本語で提供してください。

ゲームのルール:
- プレイヤーは左右移動とジャンプができます
- 画面右端に到達すると次の画面に進み、左端に到達すると前の画面に戻ります
- 敵キャラクター（ハザード）に当たるとゲームオーバーです
- 茶色のブロックは足場（プラットフォーム）です
- 緑色の地面の上を移動します
- ステージ5以降では敵が動き回ります
- 間欠泉や雫トラップが存在するステージもあります
- ゴール（旗）に到達するとステージクリアです


スクリーンショットからプレイヤーの死因を推測し、次回どうすればよいか具体的なアドバイスを1文で非常に簡潔に答えてください。
なお、ゲーム画面に表示されるため、Markdown形式は使用できません。
"""

def lambda_handler(event, context):
    """
    スクリーンショット画像をClaude（Bedrock）に送り、アドバイスを得るLambda関数。
    """
    try:
        body = event.get("body", "")
        if event.get("isBase64Encoded", False):
            body = base64.b64decode(body).decode("utf-8")

        payload = json.loads(body)
        image_data = payload.get("image", "")
        stage_id = payload.get("stageId", "")
        stage_name = payload.get("stageName", "")
        hazard_image = payload.get("hazardImage", "")
        ai_assist_prompt = payload.get("aiAssistPrompt", "")

        if not image_data:
            return {
                "statusCode": 400,
                "headers": {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "POST,OPTIONS",
                },
                "body": json.dumps({"error": "image data is required"}),
            }

        # data:image/png;base64,... のプレフィックスを除去
        raw_base64 = image_data.split(",")[1] if "," in image_data else image_data

        logger.info(f"Received image for stage {stage_id} ({stage_name}), hazard: {hazard_image}")

        # ユーザーメッセージにステージ情報を含める
        context_text = f"現在のステージ: ステージ{stage_id}「{stage_name}」\n"
        if hazard_image:
            context_text += f"敵の画像ファイル名: {hazard_image}\n"
        if ai_assist_prompt:
            context_text += f"追加情報: {ai_assist_prompt}\n"
        context_text += "\nこのスクリーンショットを分析して、ゲームオーバーの原因と次回のアドバイスをください。"

        # Bedrock Claude API呼び出し
        request_body = json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 300,
            "system": SYSTEM_PROMPT,
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "image",
                            "source": {
                                "type": "base64",
                                "media_type": "image/png",
                                "data": raw_base64,
                            },
                        },
                        {
                            "type": "text",
                            "text": context_text,
                        },
                    ],
                }
            ],
        })

        response = bedrock_runtime.invoke_model(
            modelId="jp.anthropic.claude-haiku-4-5-20251001-v1:0",
            contentType="application/json",
            accept="application/json",
            body=request_body,
        )

        response_body = json.loads(response["body"].read())
        advice = response_body["content"][0]["text"]

        logger.info(f"Claude advice: {advice}")

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST,OPTIONS",
            },
            "body": json.dumps({"advice": advice}),
        }

    except Exception as e:
        logger.error(f"Error: {str(e)}")
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST,OPTIONS",
            },
            "body": json.dumps({"error": str(e)}),
        }
