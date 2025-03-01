import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary/80 backdrop-blur-md border-t border-accent/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Cashify</h3>
            <p className="text-gray-400 mb-4">
              Turn trading volume into real rewards. Earn SOL automatically every time the market reaches a 200K trading
              milestone.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-400 hover:text-secondary transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="#why-cashify" className="text-gray-400 hover:text-secondary transition-colors">
                  Why Cashify
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-secondary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <p className="text-gray-400 mb-4">Cryptocurrency investments carry market risks. Invest responsibly.</p>
            <p className="text-gray-400">© 2025 Cashify. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

