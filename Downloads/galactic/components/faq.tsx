"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "What is Galactic Liquidity?",
    answer:
      "Galactic Liquidity is a liquidity provision mechanism on the Solana blockchain, aiming to empower the ecosystem with innovative tokenomics and reward structures.",
  },
  {
    question: "How does the reward system work?",
    answer:
      "Our reward system is designed to incentivize liquidity providers and long-term holders. Detailed mechanics will be announced as we approach launch.",
  },
  {
    question: "When will Galactic Liquidity launch?",
    answer:
      "The exact launch date is yet to be announced. Stay tuned to our official channels for the most up-to-date information.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">FAQ</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-white/10 rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{item.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white/5">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

