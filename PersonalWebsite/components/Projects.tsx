import ProjectCard from "./ProjectCard"

export default function Projects() {
  const projects = [
    {
      tags: [
        { text: "Python", color: "blue" },
        { text: "React", color: "teal" },
        { text: "Django", color: "green" },
      ],
    },
    {
      tags: [
        { text: "Python", color: "blue" },
        { text: "React", color: "teal" },
        { text: "Django", color: "green" },
      ],
    },
    {
      tags: [
        { text: "Python", color: "blue" },
        { text: "React", color: "teal" },
        { text: "Django", color: "green" },
      ],
    },
    {
      tags: [
        { text: "Python", color: "blue" },
        { text: "React", color: "teal" },
        { text: "Django", color: "green" },
      ],
    },
    {
      tags: [
        { text: "Python", color: "blue" },
        { text: "React", color: "teal" },
        { text: "Django", color: "green" },
      ],
    },
    {
      tags: [
        { text: "Python", color: "blue" },
        { text: "React", color: "teal" },
        { text: "Django", color: "green" },
      ],
    },
  ]

  return (
    <section id="projetos" className="min-h-screen py-16 px-8 bg-secondary">
      <div className="max-w-7xl mx-auto w-full">
        <div className="border-l-2 border-primary pl-8 mb-16">
          <h2 className="heading text-5xl md:text-6xl">Projetos</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} tags={project.tags} />
          ))}
        </div>
      </div>
    </section>
  )
}

