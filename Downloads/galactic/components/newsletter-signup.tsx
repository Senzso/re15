"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email)
    setIsSubmitted(true)
  }

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Stay Updated</h2>
      {isSubmitted ? (
        <p className="text-center text-green-400">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent text-white border-white"
          />
          <Button type="submit" variant="ghost" className="text-white hover:bg-white/10 transition-colors">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  )
}

