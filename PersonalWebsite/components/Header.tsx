"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [activeTab, setActiveTab] = useState("sobre mim")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projetos")
      if (projectsSection) {
        const projectsPosition = projectsSection.getBoundingClientRect().top
        setIsScrolled(projectsPosition < window.innerHeight / 2)

        if (projectsPosition < window.innerHeight / 2) {
          setActiveTab("projetos")
        } else {
          setActiveTab("sobre mim")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed w-full top-0 z-50 py-4 px-8 flex justify-between items-center bg-[#f8f8f6]/90 backdrop-blur-sm">
      <nav className="flex space-x-8">
        <Link href="https://github.com" target="_blank" className="nav-link text-[#9B9B9B] body-text">
          github
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="nav-link text-[#9B9B9B] body-text">
          linkedin
        </Link>
        <Link href="#contato" className="nav-link text-[#9B9B9B] body-text">
          contato
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="bg-primary rounded-full p-1 flex items-center switch-button">
          <button
            className={`px-4 py-1 rounded-full text-sm transition-all ${
              activeTab === "sobre mim" ? "bg-white text-primary" : "text-white"
            }`}
            onClick={() => {
              setActiveTab("sobre mim")
              scrollToSection("hero")
            }}
          >
            sobre mim
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm transition-all ${
              activeTab === "projetos" ? "bg-white text-primary" : "text-white"
            }`}
            onClick={() => {
              setActiveTab("projetos")
              scrollToSection("projetos")
            }}
          >
            projetos
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-primary"></div>
          <span className="text-xs">PT</span>
          <span className="text-xs text-[#9B9B9B]">EN</span>
        </div>
      </div>
    </header>
  )
}

