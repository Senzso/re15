"use client"
import { useState } from "react"
import { ChevronDown, Zap, Users, TrendingUp, BarChart3, DollarSign, PieChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Add this type for FAQ items
type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "How do I qualify for rewards?",
    answer:
      "To qualify for rewards, you need to be among the top 50 holders of NET INFINITE GAINS GLITCH AUTOMATION tokens when the 200K volume milestone is reached. The more tokens you hold, the larger your share of the rewards pool.",
  },
  {
    question: "When are rewards distributed?",
    answer:
      "Rewards are distributed automatically whenever the trading volume reaches 200K. This could happen multiple times per day or take several days depending on market activity.",
  },
  {
    question: "How much SOL will I receive?",
    answer:
      "The amount of SOL you receive depends on your position among the top 50 holders and the proportion of tokens you hold. The total reward pool of $40,000 in SOL is distributed proportionally among qualifying holders.",
  },
  {
    question: "Do I need to claim my rewards?",
    answer:
      "No, rewards are sent automatically to your wallet. There's no need to claim or stake your tokens to receive rewards.",
  },
  {
    question: "Is there a minimum holding requirement?",
    answer:
      "There's no specific minimum holding requirement, but you need to be among the top 50 holders to qualify for rewards. The exact threshold will vary based on the distribution of tokens.",
  },
  {
    question: "Where can I buy NET INFINITE GAINS GLITCH AUTOMATION tokens?",
    answer:
      "You can buy NET INFINITE GAINS GLITCH AUTOMATION tokens on decentralized exchanges on the Solana network, such as Raydium, Orca, or Jupiter. Make sure to use the official contract address to avoid scams.",
  },
]

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black text-red-500 font-sans">
      {/* Header */}
      <header className="container mx-auto pt-4 px-4">
        <div className="text-center mb-8">
          <div className="glitch-container mb-4 relative inline-block w-[300px] h-[100px]">
            <Image
              src="https://iili.io/33vIYJa.md.png"
              alt="Net Infinite Gains Glitch Automation Logo"
              width={300}
              className="glitch-image"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 relative">
            <span className="glitch-text" data-text="NET INFINITE GAINS">
              NET INFINITE GAINS
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 relative">
            <span className="glitch-text" data-text="GLITCH AUTOMATION">
              GLITCH AUTOMATION
            </span>
          </h2>
          <p className="text-xl mb-2">The revolutionary Solana rewards token that pays holders in SOL</p>
          <p className="text-2xl font-semibold mb-6">Every 200K volume reached</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-red-500 text-black px-8 py-3 text-lg font-bold hover:bg-red-400 transition-colors">
              BUY HERE
            </button>
            <button className="border border-red-500 px-8 py-3 text-lg font-bold hover:bg-red-500/10 transition-colors">
              VIEW TOKENOMICS
            </button>
            <button className="border border-red-500 px-8 py-3 text-lg font-bold hover:bg-red-500/10 transition-colors">
              FOLLOW US
            </button>
          </div>
        </div>
        <style jsx>{`
          .glitch-text {
            position: relative;
            display: inline-block;
          }
          .glitch-text::before,
          .glitch-text::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
          }
          .glitch-text::before {
            left: 2px;
            text-shadow: -2px 0 #ff0000;
            clip: rect(24px, 550px, 90px, 0);
            animation: glitch-anim-1 2s infinite linear alternate-reverse;
          }
          .glitch-text::after {
            left: -2px;
            text-shadow: -2px 0 #ff00ff;
            clip: rect(85px, 550px, 140px, 0);
            animation: glitch-anim-2 2s infinite linear alternate-reverse;
          }
          @keyframes glitch-anim-1 {
            0% {
              clip: rect(141px, 9999px, 74px, 0);
            }
            20% {
              clip: rect(56px, 9999px, 147px, 0);
            }
            40% {
              clip: rect(106px, 9999px, 7px, 0);
            }
            60% {
              clip: rect(90px, 9999px, 140px, 0);
            }
            80% {
              clip: rect(35px, 9999px, 156px, 0);
            }
            100% {
              clip: rect(82px, 9999px, 37px, 0);
            }
          }
          @keyframes glitch-anim-2 {
            0% {
              clip: rect(66px, 9999px, 122px, 0);
            }
            20% {
              clip: rect(147px, 9999px, 52px, 0);
            }
            40% {
              clip: rect(16px, 9999px, 179px, 0);
            }
            60% {
              clip: rect(10px, 9999px, 102px, 0);
            }
            80% {
              clip: rect(92px, 9999px, 5px, 0);
            }
            100% {
              clip: rect(120px, 9999px, 54px, 0);
            }
          }
          @keyframes pulse-1 {
            0%, 100% { transform: scale(1); opacity: 0; }
            50% { transform: scale(1.1); opacity: 0.2; }
          }
          @keyframes pulse-2 {
            0%, 100% { transform: scale(1); opacity: 0; }
            50% { transform: scale(1.15); opacity: 0.15; }
          }
          @keyframes pulse-3 {
            0%, 100% { transform: scale(1); opacity: 0; }
            50% { transform: scale(1.2); opacity: 0.1; }
          }
          @keyframes fade-1 {
            0%, 100% { transform: scale(1); opacity: 0; }
            50% { transform: scale(1.05); opacity: 0.3; }
          }
          @keyframes fade-2 {
            0%, 100% { transform: scale(1); opacity: 0; }
            50% { transform: scale(1.1); opacity: 0.2; }
          }
          @keyframes fade-3 {
            0%, 100% { transform: scale(1); opacity: 0; }
            50% { transform: scale(1.15); opacity: 0.1; }
          }
          .animate-pulse-1 {
            animation: pulse-1 3s infinite;
          }
          .animate-pulse-2 {
            animation: pulse-2 3s infinite 0.5s;
          }
          .animate-pulse-3 {
            animation: pulse-3 3s infinite 1s;
          }
          .animate-fade-1 {
            animation: fade-1 3s infinite 0.2s;
          }
          .animate-fade-2 {
            animation: fade-2 3s infinite 0.7s;
          }
          .animate-fade-3 {
            animation: fade-3 3s infinite 1.2s;
          }
          .glitch-container {
            position: relative;
            display: inline-block;
            width: 100px;
            height: 50px;
            overflow: hidden;
          }

          .glitch-container::before,
          .glitch-container::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: black;
          }

          .glitch-container::before {
            left: 2px;
            background: black;
            mix-blend-mode: multiply;
          }

          .glitch-container::after {
            left: -2px;
            background: black;
            mix-blend-mode: multiply;
          }

          .glitch-image {
            position: relative;
            z-index: 1;
            filter: brightness(1.2) contrast(1.2);
          }

          @keyframes glitch-anim-1 {
            0% { clip-path: inset(40% 0 61% 0); }
            20% { clip-path: inset(92% 0 1% 0); }
            40% { clip-path: inset(43% 0 1% 0); }
            60% { clip-path: inset(25% 0 58% 0); }
            80% { clip-path: inset(54% 0 7% 0); }
            100% { clip-path: inset(58% 0 43% 0); }
          }

          @keyframes glitch-anim-2 {
            0% { clip-path: inset(69% 0 10% 0); }
            20% { clip-path: inset(92% 0 6% 0); }
            40% { clip-path: inset(46% 0 50% 0); }
            60% { clip-path: inset(24% 0 60% 0); }
            80% { clip-path: inset(86% 0 29% 0); }
            100% { clip-path: inset(14% 0 31% 0); }
          }

          .glitch-container::before {
            animation: glitch-anim-1 2s infinite linear alternate-reverse;
          }

          .glitch-container::after {
            animation: glitch-anim-2 3s infinite linear alternate-reverse;
          }
        `}</style>
      </header>

      {/* Next Reward Pool */}
      <section className="container mx-auto px-4 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(to_bottom,transparent,black_75%),linear-gradient(to_right,#ff0000_1px,transparent_1px),linear-gradient(to_bottom,#ff0000_1px,transparent_1px)] bg-[size:100%_100%,20px_20px,20px_20px]" />
        </div>
        <div className="relative">
          <div className="max-w-md mx-auto border border-red-500 p-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">Next Reward Pool</h2>
            <div className="text-6xl font-bold mb-4">$40,000</div>
            <p className="text-xl mb-4">
              SOL rewards for the top 50 holders will be unlocked when trading volume reaches 200K
            </p>
            <p className="text-xl mb-4">Estimated time until next reward: 2 days</p>

            <div className="mt-4">
              <p className="text-lg mb-2">Contract Address:</p>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  value="0x8a1c9b9...5a6d8e9a0NIGA"
                  readOnly
                  className="bg-black border border-red-500 text-red-500 text-base p-2 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Net Infinite Gains Glitch Automation */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center mb-8">What is NET INFINITE GAINS GLITCH AUTOMATION?</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          NET INFINITE GAINS GLITCH AUTOMATION is a revolutionary Solana rewards token that automatically distributes
          SOL to holders when trading volume targets are reached.
        </p>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border border-red-500 p-6">
            <div className="flex justify-center mb-4">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-3">Instant Rewards</h3>
            <p className="text-lg text-center">
              Receive SOL rewards automatically whenever 200K in volume is reached. No claiming or staking required.
            </p>
          </div>

          <div className="border border-red-500 p-6">
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-3">Top Holder Benefits</h3>
            <p className="text-lg text-center">
              The top 50 holders share $40,000 in SOL rewards every time 200K in volume is reached. Automatic
              distribution.
            </p>
          </div>

          <div className="border border-red-500 p-6">
            <div className="flex justify-center mb-4">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-3">Volume Incentives</h3>
            <p className="text-lg text-center">
              The reward mechanism encourages trading and holding, creating a sustainable ecosystem that benefits
              everyone.
            </p>
          </div>
        </div>
      </section>

      {/* How Rewards Work */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center mb-8">How Rewards Work</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Our unique reward mechanism distributes SOL directly to holders when volume targets are reached.
        </p>

        {/* Reward Distribution Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Reward Distribution Process</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center border border-red-500 h-8 w-8">1</div>
                <div>
                  <h4 className="font-bold mb-1">Volume Tracking</h4>
                  <p className="text-base">
                    The smart contract continuously monitors trading volume until 200K is reached.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center border border-red-500 h-8 w-8">2</div>
                <div>
                  <h4 className="font-bold mb-1">Snapshot</h4>
                  <p className="text-base">When 200K volume is achieved, a snapshot of the top 50 holders is taken.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center border border-red-500 h-8 w-8">3</div>
                <div>
                  <h4 className="font-bold mb-1">Reward Calculation</h4>
                  <p className="text-base">
                    $40,000 in SOL is proportionally divided among the top 50 holders based on their holdings.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center border border-red-500 h-8 w-8">4</div>
                <div>
                  <h4 className="font-bold mb-1">Automatic Distribution</h4>
                  <p className="text-base">
                    SOL rewards are automatically sent to holders' wallets without any action required.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-red-500 p-6">
            <h3 className="text-2xl font-bold mb-4 text-center">Example Reward Scenario</h3>
            <p className="text-base mb-4 text-center">
              Here's how rewards might be distributed among the top 50 holders:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Top 1-10 Holders</span>
                <span>$3,200 each</span>
              </div>
              <div className="flex justify-between">
                <span>Holders 11-20</span>
                <span>$1,600 each</span>
              </div>
              <div className="flex justify-between">
                <span>Holders 21-30</span>
                <span>$800 each</span>
              </div>
              <div className="flex justify-between">
                <span>Holders 31-50</span>
                <span>$400 each</span>
              </div>
            </div>

            <p className="text-xs text-center italic">
              * Actual distribution may vary based on the proportion of tokens held
            </p>
          </div>
        </div>

        {/* Benefits for Holders */}
        <div className="border border-red-500 p-6 mt-8 max-w-md mx-auto md:ml-auto">
          <h3 className="text-2xl font-bold mb-4">Benefits for Holders</h3>
          <ul className="space-y-2 list-disc pl-6">
            <li>Regular SOL rewards based on holding activity</li>
            <li>Incentive to hold larger amounts for bigger rewards</li>
            <li>No staking or locking required to earn rewards</li>
            <li>Rewards in SOL, not token emissions (no dilution)</li>
          </ul>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center mb-8">Tokenomics</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Revolutionizing holder rewards: 100% of revenue is distributed back to our community
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 border-4 border-red-500 rounded-full flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-lg">
                    Revenue to
                    <br />
                    Rewards
                  </div>
                </div>
              </div>
              {/* Pulsating circles */}
              <div className="absolute inset-0 rounded-full animate-pulse-1 bg-red-500 opacity-0"></div>
              <div className="absolute inset-0 rounded-full animate-pulse-2 bg-red-500 opacity-0"></div>
              <div className="absolute inset-0 rounded-full animate-pulse-3 bg-red-500 opacity-0"></div>
              {/* Fading lines */}
              <div className="absolute inset-0 rounded-full animate-fade-1 border border-red-500 opacity-0"></div>
              <div className="absolute inset-0 rounded-full animate-fade-2 border-2 border-red-500 opacity-0"></div>
              <div className="absolute inset-0 rounded-full animate-fade-3 border-4 border-red-500 opacity-0"></div>
            </div>
          </div>

          <div className="border border-red-500 p-6">
            <h3 className="text-2xl font-bold mb-4">Reward Distribution</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <PieChart className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Holder Rewards</h4>
                  <p className="text-base">Every single dollar of revenue goes back to token holders</p>
                </div>
              </div>

              <div className="flex gap-4">
                <DollarSign className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">SOL Payments</h4>
                  <p className="text-base">Rewards distributed in SOL for immediate value</p>
                </div>
              </div>

              <div className="flex gap-4">
                <TrendingUp className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Volume Based</h4>
                  <p className="text-base">Rewards triggered at every 200K volume milestone</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-red-500 p-6 mt-8 max-w-md mx-auto md:ml-auto">
          <h3 className="text-2xl font-bold mb-4">Distribution Process</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 flex-shrink-0" />
              <span className="text-base">Trading volume tracked in real-time</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 flex-shrink-0" />
              <span className="text-base">Automatic snapshot at 200K volume</span>
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 flex-shrink-0" />
              <span className="text-base">Top 50 holders receive rewards</span>
            </li>
            <li className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 flex-shrink-0" />
              <span className="text-base">New tracking period begins</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Everything you need to know about NET INFINITE GAINS GLITCH AUTOMATION rewards.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-red-500 hover:border-red-400 transition-colors">
              <button className="w-full text-left p-4" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">{item.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 transition-transform duration-200 ${openFAQ === index ? "rotate-180" : ""}`}
                  />
                </div>
                {openFAQ === index && <div className="mt-4 text-lg text-red-400/90">{item.answer}</div>}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span className="font-bold">NET INFINITE GAINS GLITCH AUTOMATION</span>
              </div>
              <p className="text-lg mt-2">
                The revolutionary Solana rewards token that pays holders in SOL when trading volume milestones are
                reached
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul className="space-y-2 text-xl">
                <li>
                  <Link href="#" className="hover:text-red-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    Tokenomics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-base mt-8">
            © 2025 NET INFINITE GAINS GLITCH AUTOMATION. All rights reserved.
          </div>
        </div>
      </footer>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        function triggerGlitch() {
          const glitchText = document.querySelector('.glitch-text');
          glitchText.style.animation = 'none';
          void glitchText.offsetWidth;
          glitchText.style.animation = null;
        }

        setInterval(triggerGlitch, Math.random() * 1000 + 1000);
      `,
        }}
      />
    </div>
  )
}

