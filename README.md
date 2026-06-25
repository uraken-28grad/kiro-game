# Kiro Game

横スクロール型 2D プラットフォーマーゲーム。Kiro (AI アシスタント) によって生成されたプロジェクトです。

## 開発環境

Docker を使用して開発環境を構築しています。ホストに Node.js がなくても動作します。

### コマンド

```bash
# 依存インストール（初回 & package.json 変更時）
docker compose run --rm app npm install

# 開発サーバー起動
docker compose up

# バックグラウンドで起動
docker compose up -d

# 停止
docker compose down

# プロダクションビルド
docker compose run --rm app npm run build

# Lint
docker compose run --rm app npm run lint

# コンテナ再ビルド（Dockerfile変更時）
docker compose up --build
```

### アクセス URL

開発サーバー起動後、以下にアクセス：

- ホーム画面: http://localhost:5173/
- プレイ画面: http://localhost:5173/play

### 操作方法

- `←` `→` : 左右移動（背景スクロール）
- `Space` : ジャンプ

## 技術スタック

### ランタイム / フレームワーク

| ライブラリ | バージョン | 用途 |
|---|---|---|
| React | 19.0.0 | UI フレームワーク |
| React DOM | 19.0.0 | DOM レンダリング |
| react-router-dom | 7.1.1 | ページルーティング |
| Pixi.js | 8.2.6 | 2D WebGL 描画エンジン |
| @pixi/react | 8.0.2 | Pixi.js の React バインディング |

### 開発ツール

| ツール | バージョン | 用途 |
|---|---|---|
| TypeScript | 5.6.3 | 型安全な開発 |
| Vite | 6.0.1 | ビルド / 開発サーバー |
| ESLint | 9.15.0 | コード品質チェック |
| Docker (node:20-alpine) | - | 開発環境コンテナ |

## Kiro について

このプロジェクトは [Kiro](https://kiro.dev) (AI コーディングアシスタント) との対話により設計・実装されました。プロジェクト構成、ライブラリ選定、ゲームロジックのすべてが AI との協業で生成されています。
