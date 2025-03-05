import { Countdown } from "@/components/countdown"
import { CopyButton } from "@/components/copy-button"
import { SocialButton } from "@/components/social-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Twitter } from "lucide-react"
import Link from "next/link"

export default function Home() {
  // Placeholder contract address - replace with actual address
  const contractAddress = "5xyzABC123defGHI456jklMNO789pqrSTU"

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="grid-background w-full h-full opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto py-6 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
              <span className="font-bold">$RE15</span>
            </div>
            <h1 className="text-xl font-bold">Reward Every 15 Minutes</h1>
          </div>
          <div className="flex gap-4">
            <SocialButton platform="twitter" url="https://twitter.com/RE15token" />
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-950">
              <Link href="#buy">Buy Now</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto py-20 px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <Badge className="bg-purple-600 hover:bg-purple-700">Solana Token</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Get Rewarded{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Every 15 Minutes
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              A revolutionary Solana token that distributes 100% of the 12.5% transaction tax back to holders every 15
              minutes.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white">
                <Link href="#buy">Buy $RE15</Link>
              </Button>
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-900/20">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>

            <div className="pt-6">
              <div className="flex flex-row gap-4 items-end">
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-2">Contract Address:</p>
                  <div className="flex items-center gap-2 bg-gray-900/60 p-3 rounded-lg border border-gray-800 h-12">
                    <code className="text-xs sm:text-sm text-gray-300 flex-1 overflow-hidden text-ellipsis">
                      {contractAddress}
                    </code>
                    <CopyButton textToCopy={contractAddress} />
                  </div>
                </div>
                <Button
                  className="bg-[#1DA1F2] hover:bg-[#1a94e0] text-white flex items-center gap-2 h-12 px-4"
                  onClick={() =>
                    window.open(
                      "https://twitter.com/intent/tweet?text=I%20just%20found%20%24RE15%20token%20on%20Solana%20-%20rewards%20every%2015%20minutes!%20Check%20it%20out%20at%20https%3A%2F%2Fre15.io",
                      "_blank",
                    )
                  }
                >
                  <Twitter size={18} />
                  Share on X
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <Countdown />
          </div>
        </section>

        {/* Features Section */}
        <section id="about" className="bg-gray-900/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How $RE15 Works</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 group">
                <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-all">
                  <span className="text-2xl font-bold text-purple-400">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">12.5% Transaction Tax</h3>
                <p className="text-gray-400">
                  Every buy and sell transaction includes a 12.5% tax that goes into the reward pool.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all">
                  <span className="text-2xl font-bold text-blue-400">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">15-Minute Cycles</h3>
                <p className="text-gray-400">
                  The smart contract automatically distributes rewards every 15 minutes to all token holders.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 group">
                <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-all">
                  <span className="text-2xl font-bold text-indigo-400">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">100% Distribution</h3>
                <p className="text-gray-400">
                  All collected taxes are distributed back to holders - no team allocation, no exceptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Tokenomics</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                    Token Supply
                  </h3>
                  <p className="text-3xl font-bold text-purple-400">1,000,000,000 $RE15</p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                    Transaction Tax
                  </h3>
                  <p className="text-3xl font-bold text-blue-400">12.5%</p>
                  <p className="text-gray-400 mt-2">100% redistributed to holders every 15 minutes</p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                    Ticker
                  </h3>
                  <p className="text-3xl font-bold text-indigo-400">$RE15</p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-full flex items-center justify-center p-8 border border-purple-500/30 shadow-lg shadow-purple-500/10">
                  <div className="aspect-square w-full bg-gray-900/80 rounded-full flex items-center justify-center p-8 border border-gray-700">
                    <div className="text-center space-y-2">
                      <p className="text-gray-400">Next Reward In</p>
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                        <Countdown small />
                      </div>
                      <p className="text-sm text-gray-500">Rewards distributed automatically</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500 rounded-full blur-xl opacity-70"></div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Buy Section */}
        <section id="buy" className="bg-gray-900/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How to Buy $RE15</h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-all">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Create Wallet</h3>
                <p className="text-gray-400 text-sm">Download and set up a Solana-compatible wallet like Phantom</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-all">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Get SOL</h3>
                <p className="text-gray-400 text-sm">Purchase SOL from an exchange and send it to your wallet</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-all">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Connect to DEX</h3>
                <p className="text-gray-400 text-sm">
                  Visit a Solana DEX like Raydium or Jupiter and connect your wallet
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-all">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Swap for $RE15</h3>
                <p className="text-gray-400 text-sm">Enter the contract address and swap your SOL for $RE15</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 text-lg">
                Buy on Jupiter
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-2">When are rewards distributed?</h3>
                <p className="text-gray-400">
                  Rewards are automatically distributed every 15 minutes to all token holders.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-2">Is there a minimum holding to receive rewards?</h3>
                <p className="text-gray-400">
                  No, all holders receive rewards proportional to their holdings, regardless of amount.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-2">How is the 12.5% tax distributed?</h3>
                <p className="text-gray-400">100% of the tax is distributed back to holders every 15 minutes.</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-2">Is the contract audited?</h3>
                <p className="text-gray-400">
                  Yes, the contract has been audited by [Audit Firm]. View the audit report on our website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the $RE15 Community</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Don't miss out on rewards every 15 minutes. Join our community and start earning today!
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-[#1DA1F2] hover:bg-[#1a94e0] text-white flex items-center gap-2">
                <Twitter size={18} />
                Follow on X
              </Button>
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-900/20">
                Join Telegram
              </Button>
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-900/20">
                Join Discord
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-10 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                  <span className="font-bold text-xs">$RE15</span>
                </div>
                <h2 className="text-lg font-bold">Reward Every 15 Minutes</h2>
              </div>

              <div className="flex gap-4">
                <SocialButton platform="twitter" url="https://twitter.com/RE15token" />
                <SocialButton platform="telegram" url="https://t.me/RE15token" />
                <SocialButton platform="discord" url="https://discord.gg/RE15token" />
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} Reward Every 15 Minutes. All rights reserved.</p>
              <p className="mt-2">
                $RE15 is not affiliated with any financial institution. Cryptocurrency investments involve risk.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* CSS for Grid Background */}
      <style jsx>{`
        .grid-background {
          background-size: 50px 50px;
          background-image:
            linear-gradient(to right, rgba(128, 90, 213, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 90, 213, 0.1) 1px, transparent 1px);
        }
      `}</style>
    </div>
  )
}

