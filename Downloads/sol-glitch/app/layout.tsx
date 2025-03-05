import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Net Infinite Gains Glitch Automation | Revolutionary Solana Rewards Token",
  description:
    "The revolutionary Solana rewards token that pays holders in SOL when trading volume targets are reached.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/27georgefloyd-articleLarge_swngph/the-rap-report-to-george-floyd-aka-big-floyd-of-the-legendary-screwed-up-click.jpg"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

