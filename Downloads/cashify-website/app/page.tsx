"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, DollarSign, BarChart2, Zap, CheckCircle2, ExternalLink } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <SectionDivider />
      <HowItWorksSection />
      <SectionDivider />
      <RewardsSection />
      <SectionDivider />
      <TransparentSection />
      <SectionDivider />
      <WhyCashifySection />
      <SectionDivider />
      <RewardSystemSection />
      <SectionDivider />
      <TokenomicsSection />
      <SectionDivider />
      <FaqSection />
      <SectionDivider />
      <JoinSection />
    </div>
  )
}

function SectionDivider() {
  return <div className="section-divider" />
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {children}
    </motion.div>
  )
}

function HeroSection() {
  return (
    <section className="section-bg-mission section-overlay relative min-h-screen flex items-center overflow-hidden">
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Algorithm-Driven Rewards:</span> <br />
                <span className="font-black">Smarter, Faster, Fairer</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Turn trading volume into real rewards. Earn SOL automatically every time the market reaches a{" "}
                <span className="font-bold text-secondary">200K trading milestone</span>—no staking, no waiting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#how-it-works" className="button-primary">
                  HOW IT WORKS
                </Link>
                <Link href="/buy" target="_blank" className="button-secondary">
                  BUY CASHIFY
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative">
              <div className="tech-image">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-0DJ6SKy9J7fnZhCM5TzY17JrXxS8cW.png"
                  alt="Digital wallet with coins"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 grid-bg"></div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-accent blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-secondary blur-[100px]" />
      </div>

      <div className="relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
            <span className="gradient-text">How Cashify Works</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="card h-full">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Fueling the Reward Pool</h3>
              <p className="text-lg mb-6 text-gray-300">
                Every buy and sell transaction contributes to a sustainable SOL reward system, ensuring consistent
                payouts.
              </p>
              <div className="">
                <Image
                  src="7t.png"
                  alt="Stacks of dollar bills"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card h-full">
              <h3 className="text-2xl font-bold mb-4 text-secondary">SOL Rewards at Every 200K Trading Milestone</h3>
              <p className="text-lg mb-6 text-gray-300">
                Each time total trading volume reaches <span className="font-bold text-white">200K</span>, $40,000 in
                SOL is distributed among the top 50 holders.
              </p>
              <div className="">
                <Image
                  src="8t.png"
                  alt="Percentage symbol with astronaut"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-12 text-center">
          <Link href="https://x.com/cashifysol" className="button-primary">
            LEARN ABOUT CASHIFY ON X 
          </Link>
        </div>
      </div>
    </section>
  )
}

function RewardsSection() {
  return (
    <section id="rewards" className="section gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 grid-bg"></div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-[100px]" />
      </div>

      <div className="relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
            <span className="gradient-text">Consistent & Fair SOL Rewards</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection>
            <div className="card h-full">
              <div className="mb-6 text-secondary">
                <BarChart2 size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Milestones That Pay</h3>
              <p className="text-gray-300">
                Every <span className="font-bold text-secondary">200K Trading Milestone</span>, a snapshot is taken, and
                the top 50 holders share $40,000 in SOL rewards.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card h-full">
              <div className="mb-6 text-secondary">
                <DollarSign size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">The More You Hold, The More You Earn</h3>
              <p className="text-gray-300">
                SOL payouts are distributed proportionally—larger holdings mean bigger rewards.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card h-full">
              <div className="mb-6 text-secondary">
                <Zap size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant & Effortless</h3>
              <p className="text-gray-300">
                No claiming, no staking. SOL is sent directly to your wallet after every milestone.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link href="/buy" className="button-secondary inline-flex items-center">
            BUY CASHIFY <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
          <Link href="https://x.com/cashifysol" className="button-secondary inline-flex items-center">
            FOLLOW ON X <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TransparentSection() {
  return (
    <section className="section gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 grid-bg"></div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary blur-[100px]" />
      </div>

      <div className="relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
            <span className="gradient-text">Transparent & Trustless Payouts</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-3 text-secondary">Blockchain-Verified</h3>
                <p className="text-gray-300">
                  Every transaction and reward distribution is publicly recorded on the Solana blockchain for full
                  transparency.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3 text-secondary">Automated & Secure</h3>
                <p className="text-gray-300">
                  A robust smart contract ensures rewards are fairly and instantly distributed, without interference.
                </p>
                <div className="mt-4">
                  <Link href="#" className="inline-flex items-center text-secondary hover:text-white transition-colors">
                    VIEW CONTRACT <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3 text-secondary">No Minimum Holding Requirement</h3>
                <p className="text-gray-300">
                  Anyone can hold, but only the top 50 holders at each <span className="font-bold">200K milestone</span>{" "}
                  receive SOL payouts.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative">
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
              >
                <Image
                  src="5t.png"
                  alt="Credit cards with blue lighting"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[60px] z-0" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function WhyCashifySection() {
  return (
    <section id="why-cashify" className="section gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 grid-bg"></div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-accent blur-[100px]" />
      </div>

      <div className="relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
            <span className="gradient-text">Why Choose Cashify?</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative">
              <motion.div
                className="relative z-10 tech-image"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-d1UIVhoVtREQnmGlWTMFXA8Fbj1NfR.png"
                  alt="Growth chart with percentage"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[60px] z-0" />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-white">SOL Rewards at Every 200K Milestone</span> – Earn with every
                    surge in trading volume.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-white">Community-Powered</span> – A decentralized, engaged community
                    driving long-term growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-white">Lightning-Fast Transactions</span> – Built on Solana for
                    near-instant, low-cost transfers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-white">Proven Tokenomics</span> – Every trade fuels the next
                    milestone, ensuring consistent rewards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-white">Audited & Secure</span> – A fully vetted smart contract
                    safeguards your earnings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-white">Fair & Equitable</span> – No staking, no emissions—just real
                    rewards from real volume.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-white">Live Earnings Dashboard</span> – Track every milestone and
                    your SOL payouts in real time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-white">Growing Ecosystem</span> – Expanding Cashify's utility
                    through partnerships and integrations.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function RewardSystemSection() {
  const [holderRank, setHolderRank] = useState(1)

  const getReward = (rank: number) => {
    if (rank <= 10) return 1500
    if (rank <= 20) return 1000
    if (rank <= 30) return 500
    return 250
  }

  return (
    <section className="section gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 grid-bg"></div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary blur-[100px]" />
      </div>

      <div className="relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
            <span className="gradient-text">How the SOL Reward System Works</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Volume Tracking</h3>
                  <p className="text-gray-300">
                    The smart contract continuously monitors trades until a{" "}
                    <span className="font-bold text-secondary">200K milestone</span> is reached.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Holder Snapshot</h3>
                  <p className="text-gray-300">
                    At every <span className="font-bold text-secondary">milestone</span>, the top 50 holders are
                    recorded for reward distribution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Payout Calculation</h3>
                  <p className="text-gray-300">$40,000 in SOL is proportionally divided based on holdings.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Automatic Distribution</h3>
                  <p className="text-gray-300">SOL rewards are sent directly—no claiming or extra steps required.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-center text-secondary">Example SOL Payouts Per Milestone</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="holder-rank" className="block text-sm font-medium text-gray-300 mb-2">
                    Select your holder rank:
                  </label>
                  <Slider
                    id="holder-rank"
                    min={1}
                    max={50}
                    step={1}
                    value={[holderRank]}
                    onValueChange={(value) => setHolderRank(value[0])}
                    className="w-full"
                  />
                </div>

                <div className="text-center">
                  <p className="text-lg mb-2">
                    Your rank: <span className="font-bold text-secondary">{holderRank}</span>
                  </p>
                  <p className="text-2xl font-bold">
                    Estimated Reward: <span className="text-secondary">${getReward(holderRank)}</span>
                  </p>
                </div>

                <div className="space-y-2 text-sm text-gray-400">
                  <p>Top 1-10 Holders: $1,500 each</p>
                  <p>Holders 11-20: $1,000 each</p>
                  <p>Holders 21-30: $500 each</p>
                  <p>Holders 31-50: $250 each</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-4 text-center italic">
                (Final amounts vary based on token holdings.)
              </p>

              <div className="mt-8">
                <Image
                  src="2t.png"
                  alt="Piggy bank with money"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function TokenomicsSection() {
  return (
    <section className="section-bg-tokenomics section-overlay relative overflow-hidden">
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative">
              <motion.div
                className="relative z-10 tech-image"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-F5J6LrY4vF65r80XrkJm3vGCcql6GX.png"
                  alt="Figure with money floating from head"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[60px] z-0" />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-secondary">100% Revenue to Rewards</h3>
              <p className="text-lg mb-6 text-gray-300">
                Every trade fuels the next <span className="font-bold">milestone</span>, ensuring sustainable payouts.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-secondary">🔹</div>
                  <p className="text-gray-300">
                    <span className="font-bold text-white">Milestones Over Staking</span> – No lock-ups, rewards come
                    from real volume.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-secondary">🔹</div>
                  <p className="text-gray-300">
                    <span className="font-bold text-white">Fair & Transparent</span> – Earn based on your holdings,
                    nothing else.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-secondary">🔹</div>
                  <p className="text-gray-300">
                    <span className="font-bold text-white">No Dilution</span> – SOL rewards come from trading activity,
                    not new token emissions.
                  </p>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-4">How It Works:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-secondary h-5 w-5" />
                  <p>Trading volume is tracked in real time</p>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-secondary h-5 w-5" />
                  <p>
                    Automatic snapshots at <span className="font-bold text-secondary">200K milestones</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-secondary h-5 w-5" />
                  <p>Top 50 holders receive direct SOL rewards</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="section-bg-faq section-overlay relative overflow-hidden">
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-secondary">How do I qualify for rewards?</h3>
              <p className="text-gray-300">Hold Cashify tokens in your wallet—no staking required.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-secondary">When are rewards distributed?</h3>
              <p className="text-gray-300">
                Each time the market reaches a <span className="font-bold">200K trading milestone</span>, SOL is sent
                instantly to top 50 holders.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-secondary">How much SOL will I receive?</h3>
              <p className="text-gray-300">It depends on your ranking among the top 50 holders.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-secondary">Do I need to claim my rewards?</h3>
              <p className="text-gray-300">No, rewards are automatically sent to your wallet.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-secondary">Is there a minimum holding requirement?</h3>
              <p className="text-gray-300">
                Anyone can hold Cashify, but only the top 50 holders per <span className="font-bold">milestone</span>{" "}
                receive payouts.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-secondary">Where can I buy Cashify?</h3>
              <p className="text-gray-300">Available on Solana DEXs—check our official links for details.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function JoinSection() {
  return (
    <section id="join" className="section gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 grid-bg"></div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent blur-[100px]" />
      </div>

      <div className="relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb6">
              <span className="gradient-text">Join the Cashify Movement</span>
            </h2>
            <p className="text-xl mb-8">
              Don't just trade—<span className="font-bold text-secondary">earn at every milestone</span>.
              <br />
              Join our community today.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/buy" className="button-primary">
                BUY CASHIFY
              </Link>
              <Link href="https://x.com/cashifysol" className="button-secondary">
                FOLLOW OUR X
              </Link>
            </div>

            <p className="text-sm text-gray-400 mt-12">
              Cryptocurrency investments carry market risks. Invest responsibly.
              <br />© 2025 Cashify. All Rights Reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

