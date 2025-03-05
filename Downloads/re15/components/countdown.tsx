"use client"

import { useEffect, useState } from "react"

// Start time: March 3rd, 3:05 AM CEST
const START_TIME = new Date("2025-03-03T03:05:00+01:00").getTime()
const CYCLE_DURATION = 15 * 60 * 1000 // 15 minutes in milliseconds

interface CountdownProps {
  small?: boolean
}

export function Countdown({ small = false }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{ minutes: string; seconds: string }>({ minutes: "15", seconds: "00" })
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now()

      // Calculate how many complete cycles have passed since the start time
      const elapsedSinceStart = now - START_TIME
      const completedCycles = Math.floor(elapsedSinceStart / CYCLE_DURATION)

      // Calculate the start of the current cycle
      const currentCycleStart = START_TIME + completedCycles * CYCLE_DURATION

      // Calculate time left in the current cycle
      const timeElapsedInCurrentCycle = now - currentCycleStart
      const timeLeftInCurrentCycle = CYCLE_DURATION - timeElapsedInCurrentCycle

      // Calculate minutes and seconds
      const minutes = Math.floor(timeLeftInCurrentCycle / 60000)
      const seconds = Math.floor((timeLeftInCurrentCycle % 60000) / 1000)

      // Calculate progress percentage (100% at start of cycle, 0% at end)
      const progressPercentage = (timeLeftInCurrentCycle / CYCLE_DURATION) * 100

      return {
        timeLeft: {
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        },
        progress: progressPercentage,
      }
    }

    // Initial calculation
    const { timeLeft: initialTimeLeft, progress: initialProgress } = calculateTimeLeft()
    setTimeLeft(initialTimeLeft)
    setProgress(initialProgress)

    // Update every second
    const interval = setInterval(() => {
      const { timeLeft: updatedTimeLeft, progress: updatedProgress } = calculateTimeLeft()
      setTimeLeft(updatedTimeLeft)
      setProgress(updatedProgress)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (small) {
    return (
      <div className="font-mono">
        {timeLeft.minutes}:{timeLeft.seconds}
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* Outer circle */}
      <div className="absolute inset-0 rounded-full bg-gray-800/50 border border-gray-700"></div>

      {/* Progress circle */}
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#1e1e2e" strokeWidth="8" />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 45}`}
          strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
          className="transition-all duration-1000 ease-linear"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Inner content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
        <p className="text-gray-400 mb-2">Next Reward In</p>
        <div className="font-mono text-5xl md:text-6xl font-bold mb-2">
          {timeLeft.minutes}:{timeLeft.seconds}
        </div>
        <p className="text-sm text-gray-500">Rewards distributed automatically every 15 minutes</p>

        {/* Pulsing dot */}
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs text-gray-400">Cycle active</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full blur-xl opacity-30"></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500 rounded-full blur-xl opacity-30"></div>
    </div>
  )
}

