import { Twitter, MessageCircle, Github } from "lucide-react"

interface SocialButtonProps {
  platform: "twitter" | "telegram" | "discord" | "github"
  url: string
}

export function SocialButton({ platform, url }: SocialButtonProps) {
  const getIcon = () => {
    switch (platform) {
      case "twitter":
        return <Twitter size={18} />
      case "telegram":
      case "discord":
        return <MessageCircle size={18} />
      case "github":
        return <Github size={18} />
      default:
        return <Twitter size={18} />
    }
  }

  const getColor = () => {
    switch (platform) {
      case "twitter":
        return "bg-[#1DA1F2] hover:bg-[#1a94e0]"
      case "telegram":
        return "bg-[#0088cc] hover:bg-[#0077b3]"
      case "discord":
        return "bg-[#5865F2] hover:bg-[#4a56d6]"
      case "github":
        return "bg-[#333] hover:bg-[#222]"
      default:
        return "bg-gray-700 hover:bg-gray-600"
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${getColor()} text-white transition-colors duration-200 ease-in-out cursor-pointer`}
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          window.open(url, "_blank", "noopener,noreferrer")
        }
      }}
      aria-label={`Visit our ${platform} page`}
    >
      {getIcon()}
    </div>
  )
}

