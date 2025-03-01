"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Copy, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BuyPage() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "J4WLpqyPUvum7bZ9eiVFEwV4dM8teBfET2ASGgNzRvtq"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0E17] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">Contract Address</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12">Use this address to buy Cashify tokens on Solana</p>

        <Card className="bg-[#0F1421] border-[#1f3072]/30 mb-8">
          <CardContent className="p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo1-HZlAumrfjDsGGNE1FVxMGtlkUXq2l8.png"
                  alt="Cashify Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#a8abff] mb-2 text-center">Cashify Contract</h2>
            <p className="text-gray-400 text-center mb-6">Solana SPL Token</p>

            <div className="relative">
              <div className="bg-[#080B12] rounded-lg p-4 font-mono text-sm md:text-base text-white break-all">
                {contractAddress}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-[#1f3072]/20"
                onClick={copyToClipboard}
              >
                <Copy className="h-4 w-4 text-gray-400" />
                <span className="sr-only">Copy address</span>
              </Button>
              {copied && (
                <div className="absolute right-12 top-1/2 -translate-y-1/2 text-sm text-[#a8abff]">Copied!</div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://solscan.io/token/J4WLpqyPUvum7bZ9eiVFEwV4dM8teBfET2ASGgNzRvtq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#1f3072] text-white px-6 py-3 rounded-lg hover:bg-[#1f3072]/80 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View on Solscan
          </Link>
          <Link
            href="https://dexscreener.com/solana/J4WLpqyPUvum7bZ9eiVFEwV4dM8teBfET2ASGgNzRvtq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#a8abff] text-[#0B0E17] px-6 py-3 rounded-lg hover:bg-[#a8abff]/80 transition-colors font-semibold"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            DexScreener
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

