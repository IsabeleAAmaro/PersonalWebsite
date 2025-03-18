"use client"

import { useRef } from "react"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const experiencesRef = useRef<HTMLDivElement>(null)

  const scrollToExperiences = () => {
    experiencesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen pt-8 px-8 flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="border-l-2 border-primary pl-8">
          <h1 className="heading text-[150px] opacity-90 leading-tight">
            Isabele
            <br />
            Amaro
          </h1>
        </div>
        <div>
          <p className="body-text text-2xl leading-relaxed text-gray-700">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem."
          </p>
        </div>
      </div>

      <button
        onClick={scrollToExperiences}
        className="absolute bottom-10 right-10 scroll-arrow"
        aria-label="Scroll to experiences"
      >
        <ArrowDown size={32} />
      </button>

      <div ref={experiencesRef}></div>
    </section>
  )
}

