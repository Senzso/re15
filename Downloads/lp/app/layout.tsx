import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "ICT Cortex Kosovo",
  description: "Zero to Professional in just 6 months!",
  generator: "v0.dev",
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
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'