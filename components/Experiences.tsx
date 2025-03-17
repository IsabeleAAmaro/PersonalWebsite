import {ArrowDown} from "lucide-react";
import {useRef} from "react";

export default function Experiences() {

  const MinhaStackRef = useRef<HTMLDivElement>(null)

    const scrollToStack = () => {
    MinhaStackRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const experiences = [
    {
      title: "Product Designer, Smallcase",
      period: "May - Aug 2021 | Bangalore, India",
      description:
        "Designed key features for onboarding to platform data widgets, charts, and objects to generate technical reports. Designed interactions for users to understand data.",
    },
    {
      title: "Product Designer, Smallcase",
      period: "May - Aug 2021 | Bangalore, India",
      description:
        "Designed key features for onboarding to platform data widgets, charts, and objects to generate technical reports. Designed interactions for users to understand data.",
    },
    {
      title: "Product Designer, Smallcase",
      period: "May - Aug 2021 | Bangalore, India",
      description:
        "Designed key features for onboarding to platform data widgets, charts, and objects to generate technical reports. Designed interactions for users to understand data.",
    },
    {
      title: "Product Designer, Smallcase",
      period: "May - Aug 2021 | Bangalore, India",
      description:
        "Designed key features for onboarding to platform data widgets, charts, and objects to generate technical reports. Designed interactions for users to understand data.",
    },
  ]

  return (
      <section id="experiencias" className="min-h-screen py-16 px-8 bg-secondary">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
                <div key={index} className="max-w-md">
                  <h3 className="font-medium text-lg">{exp.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{exp.period}</p>
                  <p className="body-text">{exp.description}</p>
                </div>
            ))}
          </div>

          <div className="border-l-2 border-primary pl-8 sticky top-24">
            <h2 className="heading text-5xl md:text-6xl">Experiências</h2>
          </div>
        </div>
        <button
            onClick={scrollToStack}
            className="absolute -bottom-300 right-10 scroll-arrow"
            aria-label="Scroll to experiences"
        >
          <ArrowDown size={32}/>
        </button>

        <div ref={MinhaStackRef}></div>
      </section>
  )
}

