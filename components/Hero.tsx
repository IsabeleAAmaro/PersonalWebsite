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
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex items-center">
          <div className="relative flex items-center">
            {/* Container para posicionamento da imagem e borda */}
            <div className="relative flex items-center">
              {/* Imagem posicionada para sobrepor ligeiramente a borda */}
              <div className="relative z-10 mr-[-75px] ml-[-40px]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my-notion-face-transparent-DiTDNZMNeMH64KpO198PRVakJpMq0a.png"
                  alt="Isabele Amaro illustration"
                  className="w-[300px] h-[300px] object-contain"
                />
              </div>

              {/* Borda e texto "Isabele Amaro" */}
              <div className="relative">
                <div className="border-l-2 border-primary h-full absolute left-0 z-0"></div>
                <div className="pl-8">
                  <h1 className="heading text-[120px] lg:text-[150px] opacity-90 leading-tight">
                    Isabele
                    <br />
                    Amaro
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
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
        <ArrowDown size={128} strokeWidth={0.5} />
      </button>

      <div ref={experiencesRef}></div>
    </section>
  )
}

