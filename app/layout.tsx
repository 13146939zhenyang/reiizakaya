import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'REI IZAKAYA',
  description: 'MOST POPULAR JAPANESE RESTAURANT IN SYDNEY',
  icons: '/icon.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
