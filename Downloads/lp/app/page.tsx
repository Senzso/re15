"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Space_Grotesk } from "next/font/google"
import { motion } from "framer-motion"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const careerPaths = [
  { name: "Enterprise Sales", path: "sales.ictcortex.com" },
  { name: "Data Science", path: "ai.ictcortex.com" },
  { name: "Back-End Development", path: "be.ictcortex.com" },
  { name: "Front-End Development", path: "fe.ictcortex.com" },
  { name: "Cyber Security", path: "cyber.ictcortex.com" },
  { name: "Project Management", path: "ops.ictcortex.com" },
  { name: "Graphic Design", path: "gfx.ictcortex.com" },
  { name: "Social Media Marketing", path: "marketing.ictcortex.com" },
  { name: "Copywriting", path: "copy.ictcortex.com" },
  { name: "Tiktok Shop Creator", path: "tiktok.ictcortex.com" },
]

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#1E0B32] to-[#2A1245] text-white ${spaceGrotesk.variable} font-sans flex flex-col relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] animate-[pulse_15s_ease-in-out_infinite]"></div>
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 z-10">
        <div className="text-center w-full max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="mb-12"
          >
            <Image
              src="https://academy.ictcortex.me/wp-content/uploads/2021/09/cortex-svg-jodzi.svg"
              alt="ICT Cortex Kosovo"
              width={200}
              height={80}
              className="mx-auto"
            />
          </motion.div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Choose Your Career Path
          </motion.h1>
          <div className="grid grid-cols-2 gap-4">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link href={`https://${path.path}`}>
                  <Button className="w-full bg-[#2A1245] hover:bg-[#3A1D55] text-white border-2 border-[#c276f4] rounded-lg py-3 px-4 text-sm md:text-base font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#c276f4]/20 hover:scale-105 h-full flex items-center justify-center text-center overflow-hidden group">
                    <span className="group-hover:scale-110 transition-transform duration-200">{path.name}</span>
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

