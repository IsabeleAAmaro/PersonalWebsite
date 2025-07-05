import ProjectCard from "./ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "NotGoodReads (App de Leitura)",
      imageSrc: "/notGoodReads.png",
      repoUrl: "https://github.com/IsabeleAAmaro/notGoodReads",
      tags: [
        { text: "Python", color: "blue" },
        { text: "React", color: "teal" },
        { text: "Django", color: "green" },
        { text: "Em Desenvolvimento", color: "green" },
      ],
    },
    {
      title: "Trajetória estimada de veículos",
      imageSrc: "/VisualOdometry.png",
      repoUrl: "https://github.com/IsabeleAAmaro/VisualOdometry-CarroAutonomo",
      tags: [
        { text: "Python", color: "blue" },
        { text: "Numpy", color: "teal" },
        { text: "Visão Computacional", color: "blue" },
      ],
    },
    {
      title: "Análises de redes complexas",
      imageSrc: "/grafos.png",
      repoUrl: "https://github.com/IsabeleAAmaro/AnalisesDeGrafos",
      tags: [
        { text: "Python", color: "blue" },
        { text: "NetworkX", color: "teal" },
        { text: "Ciência de Dados/Redes", color: "green" },
      ],
    },
    {
      title: "Exercícios do Leetcode",
      imageSrc: "/leetcode.png",
      repoUrl: "https://github.com/IsabeleAAmaro/leetcode",
      tags: [
        { text: "Java", color: "blue" },
        { text: "Python", color: "teal" },
      ],
    },
  ]

  return (
    <section id="projetos" className="min-h-screen py-16 px-8 bg-secondary">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-center md:justify-end mb-16">
          <div className="border-l-2 border-primary pl-8 text-center md:text-right mb-16">
            <h2 className="heading text-5xl md:text-6xl">Projetos</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageSrc={project.imageSrc}
              repoUrl={project.repoUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
