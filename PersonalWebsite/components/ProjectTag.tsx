interface ProjectTagProps {
  text: string
  color: string
}

export default function ProjectTag({ text, color }: ProjectTagProps) {
  const getTagColor = () => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-800"
      case "green":
        return "bg-green-100 text-green-800"
      case "teal":
        return "bg-teal-100 text-teal-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return <span className={`px-2 py-1 text-xs rounded-md ${getTagColor()}`}>{text}</span>
}

