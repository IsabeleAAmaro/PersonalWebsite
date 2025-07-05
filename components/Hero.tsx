"use client"

import { useRef } from "react"
import { ArrowDown } from "lucide-react"


export default function Hero() {
  const experiencesRef = useRef<HTMLDivElement>(null)

  const scrollToExperiences = () => {
    experiencesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
      <section id="hero" className="min-h-screen pt-4 px-4 flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative flex flex-col items-center md:flex-row">
            {/* Imagem posicionada para sobrepor ligeiramente a borda */}
            <div className="relative z-10 md:mr-[-75px] md:ml-[-40px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my-notion-face-transparent-DiTDNZMNeMH64KpO198PRVakJpMq0a.png"
                alt="Isabele Amaro illustration"
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-contain"
              />
            </div>

            {/* Borda e texto "Isabele Amaro" */}
            <div className="relative mt-4 md:mt-0">
              <div className="hidden md:block border-l-2 border-primary h-full absolute left-0 z-0"></div>
              <div className="md:pl-8">
                <h1 className="heading text-[80px] md:text-[120px] lg:text-[150px] opacity-90 leading-tight text-center md:text-left">
                  Isabele
                  <br />
                  Amaro
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-0">
          <p className="body-text text-xl leading-relaxed text-justify text-gray-700">
Desenvolvedora full stack, apaixonada por tecnologia, inovação e aprendizado contínuo. Com experiência em instituições financeiras e projetos acadêmicos, atuo no desenvolvimento de soluções web e mobile, unindo backend, frontend e integração de sistemas com foco em impacto real.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToExperiences}
        className="absolute bottom-10 right-10 scroll-arrow"
        aria-label="Scroll to experiences"
      >
        <div className="hidden md:block">
          <ArrowDown size={128} strokeWidth={0.5} />
        </div>
        <div className="block md:hidden">
          <ArrowDown size={64} strokeWidth={0.5} />
        </div>
      </button>

      <div ref={experiencesRef}></div>
    </section>
  )
}
