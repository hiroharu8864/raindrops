# 🌧️ RAIN SOUNDS

リラックスできる雨の音を楽しめるWebアプリケーションです。

## 機能

- 🌧️ **4種類の雨音** - 優しい雨、激しい雨、雷雨、小雨から選択
- 🎵 **ループ再生** - 選択した雨音を連続で再生
- 🎮 **簡単操作** - ワンクリックで再生・停止
- 📱 **レスポンシブデザイン** - デスクトップ・モバイル対応
- 🎨 **美しいUI** - グラデーション背景とガラスモーフィズム

## 技術スタック

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 (Flexbox, Grid, Animations)
- **Linting**: ESLint

## セットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone <repository-url>
cd raindrops

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### 音声ファイルの配置

音声ファイルを `public/audio/` ディレクトリに配置してください：

```
public/
  audio/
    gentle-rain.mp3      # 優しい雨
    heavy-rain.mp3       # 激しい雨
    thunderstorm.mp3     # 雷雨
    light-drizzle.mp3    # 小雨
```

## ビルド

```bash
# プロダクション用ビルド
npm run build

# ビルドの確認
npm run preview
```

## デプロイ

### Vercelでのデプロイ

1. **Vercelにデプロイ**
   ```bash
   # Vercel CLIを使用する場合
   npm i -g vercel
   vercel
   ```

2. **GitHubと連携してデプロイ**
   - [Vercel](https://vercel.com)にアクセス
   - GitHubアカウントでログイン
   - リポジトリを選択してインポート
   - 自動的にビルド・デプロイされます

3. **設定**
   - フレームワーク: Vite
   - ビルドコマンド: `npm run build`
   - 出力ディレクトリ: `dist`

## プロジェクト構成

```
src/
  ├── App.tsx          # メインアプリケーション
  ├── App.css          # アプリケーションスタイル
  ├── NotFound.tsx     # 404ページ
  ├── NotFound.css     # 404ページスタイル
  ├── main.tsx         # エントリーポイント
  └── index.css        # グローバルスタイル
```

## 使用方法

1. アプリを起動
2. 4つの雨音から好みのものを選択
3. ボタンをクリックして再生開始
4. 「停止」ボタンで再生を停止

## ライセンス

MIT License
