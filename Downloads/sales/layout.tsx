import type React from "react"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weights: [400, 500, 700],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}

