import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: 'Cashify',
  description: 'The Future of Web3 Rewards',
  generator: 'v0.dev',
  icons: {
    icon: "logo1.png",
    shortcut: "logo1.png",
    apple: "logo1.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto.variable}`}>
      <body className={`${roboto.className} bg-primary text-white min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'