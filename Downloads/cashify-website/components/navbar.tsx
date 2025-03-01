"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 mr-2 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo1-HZlAumrfjDsGGNE1FVxMGtlkUXq2l8.png"
                  alt="Cashify Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold gradient-text">Cashify</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-white font-bold hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="#how-it-works" className="text-white hover:text-secondary transition-colors">
              How it Works
            </Link>
            <Link href="#why-cashify" className="text-white hover:text-secondary transition-colors">
              Why Cashify
            </Link>
            <Link href="#follow-us" className="text-white hover:text-secondary transition-colors">
              Follow Us
            </Link>

            <Link href="#buy" className="button-primary">
              BUY CASHIFY
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-4">
              <Link
                href="#home"
                className="block text-white font-bold hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#how-it-works"
                className="block text-white hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How it Works
              </Link>
              <Link
                href="#why-cashify"
                className="block text-white hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Why Cashify
              </Link>
              <Link
                href="#follow-us"
                className="block text-white hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Follow Us
              </Link>
              <Link href="#buy" className="block button-primary text-center" onClick={() => setIsOpen(false)}>
                BUY CASHIFY
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

