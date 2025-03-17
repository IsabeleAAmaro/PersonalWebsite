import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-8 personalized-footer">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="#" className="nav-link text-[#03110B]/100 header-text">
            Currículo Lattes
          </Link>
          <Link href="#" className="nav-link text-[#03110B]/100 header-text">
            Contato
          </Link>
        </div>

        <div className="text-center text-[#03110B]/100 header-text mb-4 md:mb-0">
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

