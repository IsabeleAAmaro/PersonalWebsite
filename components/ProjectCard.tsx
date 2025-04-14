import ProjectTag from "./ProjectTag"

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  repoUrl: string; // Nova propriedade
  tags: Array<{
    text: string
    color: string
  }>
}

export default function ProjectCard({ title, imageSrc, repoUrl, tags }: ProjectCardProps) {
  return (
    <div
      className="project-card cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={() => window.open(repoUrl, '_blank')}
    >
      <div className="flex gap-2 mb-2">
        {tags.map((tag, index) => (
          <ProjectTag key={index} text={tag.text} color={tag.color} />
        ))}
      </div>
      <h3 className="text-xl font-thin mb-2 text-left">{title}</h3>
      <div className="border-8 border-primary rounded-sm">
        <div className="aspect-square bg-white rounded-sm overflow-hidden">
          <img
            src={imageSrc}
            alt={`${title} thumbnail`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}