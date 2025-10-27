import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'アンモニア在庫レベル予測ダッシュボード',
  description: 'アンモニア在庫レベル予測ダッシュボード（スタンドアロン版デモ用アプリ）',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
