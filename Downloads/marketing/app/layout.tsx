import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ICT Cortex Kosovo',
  description: 'Zero to Professional in just 6 months!',
  generator: 'v0.dev',
  icons: {
    icon: "https://academy.ictcortex.me/wp-content/uploads/2021/09/favicon.png",
    shortcut: "https://academy.ictcortex.me/wp-content/uploads/2021/09/favicon.png",
    apple: "https://academy.ictcortex.me/wp-content/uploads/2021/09/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
