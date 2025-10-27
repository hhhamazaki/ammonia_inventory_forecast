# アンモニア在庫レベル予測ダッシュボード

Next.jsで構築されたアンモニア在庫レベル予測ダッシュボードです。

[![Deploy to GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-brightgreen)](https://j1921604.github.io/ammonia_inventory_forecast/)
[![Deploy to Vercel](https://img.shields.io/badge/deploy-Vercel-black)](https://ammonia-inventory-forecast.vercel.app)

## 🚀 デモサイト

- **GitHub Pages**: https://j1921604.github.io/ammonia_inventory_forecast/
- **Vercel**: https://ammonia-inventory-forecast.vercel.app

## 📋 機能

- 📊 **インタラクティブなチャート**: Chart.jsを使用したリアルタイムグラフ
- 📅 **日付範囲選択**: 基準日を中心に過去・未来のデータを表示
- 🔔 **補充警告システム**: 在庫レベルが閾値を下回る予測を自動検出
- 📈 **統計情報**: R²、平均誤差、次回補充推奨日など
- 🌙 **ダークモード**: ネオングラデーションUI
- 📱 **レスポンシブ**: モバイル・タブレット・デスクトップ対応

## 🛠️ 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **React 18**
- **Chart.js 4.4.1** + react-chartjs-2 5.2.0

## 📦 プロジェクト構成

```
ammonia_inventory_forecast/
├── .github/workflows/     # CI/CD設定
├── app/
│   ├── layout.tsx        # ルートレイアウト
│   ├── page.tsx          # メインダッシュボード
│   └── globals.css       # グローバルスタイル
├── public/data/
│   └── predictions.csv   # 予測データ
├── next.config.js        # Next.js設定
├── package.json
└── tsconfig.json
```

## 🚀 クイックスタート

### 前提条件

- Node.js 20.x 以上
- npm または yarn

### ローカル開発

1. **リポジトリのクローン**

```bash
git clone https://github.com/J1921604/ammonia_inventory_forecast.git
cd ammonia_inventory_forecast
```

2. **依存関係のインストール**

```bash
npm install
```

3. **開発サーバーの起動**

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

### ビルド

```bash
# 本番ビルド
npm run build

# 静的エクスポート（GitHub Pages用）
npm run export
```

## 📖 デプロイ手順

詳細なデプロイ手順は **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** を参照してください。

### GitHub Pagesへのデプロイ（簡易版）

1. **必要なファイルをコピー**

   PowerShellで実行：

   ```powershell
   # コピー元（環境に合わせて変更）
   $Source = "Obsidian\アンモニア在庫レベル予測\ammonia_inventory_forecast\nextjs-deploy"
   $Dest = Join-Path $env:USERPROFILE "Desktop\ammonia_inventory_forecast"
   
   # フォルダ作成
   New-Item -Path $Dest -ItemType Directory -Force | Out-Null
   
   # 必要なフォルダをコピー
   Copy-Item "$Source\.github" -Destination "$Dest\.github" -Recurse -Force
   Copy-Item "$Source\app" -Destination "$Dest\app" -Recurse -Force
   Copy-Item "$Source\public" -Destination "$Dest\public" -Recurse -Force
   
   # 必要なファイルをコピー
   Copy-Item "$Source\.gitignore" -Destination "$Dest\" -Force
   Copy-Item "$Source\next.config.js" -Destination "$Dest\" -Force
   Copy-Item "$Source\package.json" -Destination "$Dest\" -Force
   Copy-Item "$Source\tsconfig.json" -Destination "$Dest\" -Force
   Copy-Item "$Source\vercel.json" -Destination "$Dest\" -Force
   ```

2. **GitHubにプッシュ**

   ```powershell
   cd "$env:USERPROFILE\Desktop\ammonia_inventory_forecast"
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/J1921604/ammonia_inventory_forecast.git
   git branch -M main
   git push -u origin main
   ```

3. **GitHub Pagesを有効化**
   - リポジトリ → Settings → Pages
   - Source → **GitHub Actions**

### Vercelへのデプロイ（簡易版）

```powershell
npm install -g vercel
cd "$env:USERPROFILE\Desktop\ammonia_inventory_forecast"
vercel login
vercel
vercel --prod
```

## 📊 データ形式

`public/data/predictions.csv`:

```csv
date,actual_power,actual_ammonia,is_refill,predicted_ammonia,prediction_error,prediction_error_pct
2024-10-01 09:00:00,537297.1361,783.4997603,0,783.4997603,0.0,0.0
```

### カラム説明

- `date`: 日時（YYYY-MM-DD HH:MM:SS）
- `actual_power`: 実績発電量 (kW)
- `actual_ammonia`: 実績在庫レベル (m³)
- `is_refill`: 補充フラグ (0 or 1)
- `predicted_ammonia`: 予測在庫レベル (m³)
- `prediction_error`: 予測誤差 (m³)
- `prediction_error_pct`: 予測誤差率 (%)

## 🎨 カスタマイズ

### 補充レベルの変更

`app/page.tsx`:

```typescript
const [refillLevel, setRefillLevel] = useState<number>(600) // 初期値を変更
```

### 表示期間の変更

```typescript
const [currentRange] = useState<number>(30) // 前後30日 → 変更可能
```

### カラースキーム

`app/globals.css`:

```css
.title {
  background: linear-gradient(45deg, #00ffff, #00ff88, #ff00ff);
}
```

## 🐛 トラブルシューティング

### GitHub Pagesで404エラー

- `next.config.js`の`basePath`がリポジトリ名と一致しているか確認
- `assetPrefix`の末尾に`/`があるか確認

### CSVデータが読み込めない

- `public/data/predictions.csv`が存在するか確認
- `app/page.tsx`のbasePath設定を確認

### Chart.jsが表示されない

```bash
# 依存関係を再インストール
npm install
```

詳細は [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) のトラブルシューティングセクションを参照。

## 📝 ライセンス

MIT License

## 👥 貢献

プルリクエストを歓迎します！

## 📧 サポート

問題が発生した場合は、[GitHub Issues](https://github.com/J1921604/ammonia_inventory_forecast/issues) で報告してください。

---
