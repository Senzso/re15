import type React from "react"
interface ImageContainerProps {
  children: React.ReactNode
  className?: string
}

export function ImageContainer({ children, className = "" }: ImageContainerProps) {
  return (
    <div className={`tech-border ${className}`}>
      <div className="tech-image">{children}</div>
    </div>
  )
}

