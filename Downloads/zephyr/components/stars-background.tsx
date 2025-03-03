"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

const DynamicStarField = dynamic(() => import("./StarField"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />,
})

export function StarsBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
        <DynamicStarField />
      </Suspense>
    </div>
  )
}

