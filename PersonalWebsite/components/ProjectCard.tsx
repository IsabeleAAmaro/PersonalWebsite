import ProjectTag from "./ProjectTag"

interface ProjectCardProps {
  tags: Array<{
    text: string
    color: string
  }>
}

export default function ProjectCard({ tags }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="flex gap-2 mb-2">
        {tags.map((tag, index) => (
          <ProjectTag key={index} text={tag.text} color={tag.color} />
        ))}
      </div>
      <div className="border-4 border-primary p-2 rounded-sm">
        <div className="aspect-square bg-white rounded-sm overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder%20image-qP9VJbxHgx8jC1PrbTOuHVhxvZOPwl.png"
            alt="Project thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

