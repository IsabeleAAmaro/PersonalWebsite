"use client"

import { useEffect, useRef } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Experiences from "../components/Experiences"
import Stack from "@/components/Stack"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize smooth scrolling behavior
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleLinkClick)
    return () => document.removeEventListener("click", handleLinkClick)
  }, [])

  return (
      <main ref={scrollRef} className="min-h-screen">
          <Header/>
          <Hero/>
          <Experiences/>
          <Stack/>
          <Projects/>
          <Footer/>
      </main>
  )
}

