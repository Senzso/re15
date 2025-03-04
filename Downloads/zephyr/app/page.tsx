"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { StarsBackground } from "@/components/stars-background"
import { Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { FAQ } from "@/components/faq"

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("")
  const [isExpired, setIsExpired] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const targetDate = new Date("2024-12-28T17:00:00+01:00").getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setIsExpired(true)
        setTimeLeft("")
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft(
        `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
      )
    }

    const timer = setInterval(updateTimer, 1000)
    updateTimer()

    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("EobVfrzFx2eVRRJyvrk5qnyVpztTDjDyGZefpAP2aEFn")
      .then(() => {
        console.log("EobVfrzFx2eVRRJyvrk5qnyVpztTDjDyGZefpAP2aEFn copied to clipboard")
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err)
      })
  }

  if (!isLoaded) {
    return null
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <StarsBackground />
      </div>
      <div className="relative w-full max-w-4xl mx-auto z-10">
        <div className="relative mx-auto h-72 w-72 mb-8">
          <div className="absolute inset-0 z-10">
            <StarsBackground />
          </div>
          <div className="absolute inset-0 z-20 mix-blend-screen">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skibidi-kuOZQvK2iUKXp9O8vl0uMIMzBuI3Km.gif"
              alt="Galactic Liquidity Wireframe"
              fill
              className="object-contain select-none pointer-events-none"
              priority
              unoptimized
            />
          </div>
        </div>
        <div className="text-center space-y-8 relative z-30">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-4">
              <a
                href="https://x.com/galacticliq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                Galactic Liquidity
              </a>
            </h1>
            <p className="text-lg text-gray-400">$GL - Empowering Solana's Liquidity Universe</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">{/*Removed Generate SOL Wallet button*/}</div>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10 transition-colors"
              onClick={() => window.open("https://x.com/galacticliq", "_blank")}
            >
              <Twitter className="mr-2 h-4 w-4" />
              Follow on Twitter
            </Button>
            <div className="flex items-center gap-2">
              <Input value="EobVfrzFx2eVRRJyvrk5qnyVpztTDjDyGZefpAP2aEFn" readOnly className="bg-transparent text-white border-white" />
              <Button
                variant="ghost"
                onClick={copyToClipboard}
                className="text-white hover:bg-white/10 transition-colors"
              >
                Copy CA
              </Button>
            </div>
          </div>
          {isExpired ? (
            <div className="mt-8">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 transition-colors"
                onClick={() => window.open("https://pump.fun/board/", "_blank")}
              >
                Buy Now
              </Button>
            </div>
          ) : (
            <div className="text-2xl font-mono mt-8">{timeLeft}</div>
          )}
        </div>
        <div className="mt-16 space-y-8 relative z-30">
          <h2 className="text-3xl font-semibold text-center">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard title="Transaction Tax" description="10% tax fuels the liquidity rewards ecosystem" />
            <FeatureCard
              title="Holder Rewards"
              description="Top 200 holders earn rewards every $77k volume milestone"
            />
            <FeatureCard
              title="Reward Distribution"
              description="100% of tax revenue flows directly to the rewards pool"
            />
            <FeatureCard
              title="Liquidity Innovation"
              description="Revolutionary liquidity provision mechanism on Solana"
            />
          </div>
        </div>
        <div className="relative z-30">
          <FAQ />
        </div>
      </div>
      {/*Removed WalletGenerator component*/}
    </main>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

