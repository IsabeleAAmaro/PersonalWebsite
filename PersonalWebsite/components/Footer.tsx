import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-8 bg-secondary border-t border-gray-300">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="#" className="nav-link text-sm text-gray-600">
            Currículo Lattes
          </Link>
          <Link href="#" className="nav-link text-sm text-gray-600">
            Contato
          </Link>
        </div>

        <div className="text-center text-xs text-gray-500 mb-4 md:mb-0">
          Isabele Amaro © Copyright 2023 - All rights reserved.
        </div>

        <div className="flex space-x-4">
          <Link
            href="https://github.com"
            target="_blank"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

