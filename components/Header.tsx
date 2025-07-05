"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [activeTab, setActiveTab] = useState("sobre mim");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="fixed w-full top-0 z-50 py-4 px-8 flex justify-between items-center backdrop-blur-sm">
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link href="https://github.com/IsabeleAAmaro" target="_blank" className="nav-link text-[#03110B]/100 header-text text-[24px]" onClick={() => setIsMenuOpen(false)}>
                github
              </Link>
              <Link href="https://www.linkedin.com/in/isabele-amaro/" target="_blank" className="nav-link text-[#03110B]/100 header-text text-[24px]" onClick={() => setIsMenuOpen(false)}>
                linkedin
              </Link>
              <Link href="mailto:isabeleamaro@edu.unirio.br" className="nav-link text-[#03110B]/100 header-text text-[24px]" onClick={() => setIsMenuOpen(false)}>
                contato
              </Link>
            </nav>
          </div>
        )}
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link href="https://github.com/IsabeleAAmaro" target="_blank" className="nav-link text-[#03110B]/100 header-text text-[36px]">
          github
        </Link>
        <Link href="https://www.linkedin.com/in/isabele-amaro/" target="_blank" className="nav-link text-[#03110B]/100 header-text text-[36px]">
          linkedin
        </Link>
        <Link href="mailto:isabeleamaro@edu.unirio.br" className="nav-link text-[#03110B]/100 header-text text-[36px]">
          contato
        </Link>
      </nav>
      <div className="flex-grow flex justify-center md:flex-grow-0">
          <div className="bg-primary rounded-full p-1 md:p-3 flex items-center switch-button">
            <button
                className={`px-3 py-1 md:px-5 md:py-2 rounded-full text-[16px] md:text-[26px] font-thin transition-all ${
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
                className={`px-3 py-1 md:px-5 md:py-2 rounded-full text-[16px] md:text-[26px] font-thin transition-all ${
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
