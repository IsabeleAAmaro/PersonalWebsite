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
      <header
          className="fixed w-full top-0 z-50 py-4 px-8 flex justify-between items-center bg-[#f8f8f6] backdrop-blur-sm">
        <nav className="flex space-x-8">
          <Link href="https://github.com/IsabeleAAmaro" target="_blank"
                className="nav-link text-[#03110B]/100 header-text text-[36px]">
            github
          </Link>
          <Link href="https://www.linkedin.com/in/isabele-amaro/" target="_blank"
                className="nav-link text-[#03110B]/100 header-text text-[36px]">
            linkedin
          </Link>
          <Link href="mailto:isabeleamaro@edu.unirio.br" className="nav-link text-[#03110B]/100 header-text text-[36px]">
            contato
          </Link>
        </nav>

        <div className="flex items-center">
          <div className="bg-primary rounded-full p-3 flex items-center switch-button">
            <button
                className={`px-5 py-2 rounded-full text-[26px] font-thin transition-all ${
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
                className={`px-5 py-2 rounded-full text-[26px] font-thin transition-all ${
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
        </div>
      </header>
  )
}

