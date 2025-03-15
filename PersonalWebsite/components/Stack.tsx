export default function Stack() {
  // Create a 2x7 grid of tech stack items
  const stackItems = Array(14)
    .fill(null)
    .map((_, i) => i + 1)

  return (
    <section id="stack" className="min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="border-l-2 border-primary pl-8 mb-16">
          <h2 className="heading text-5xl md:text-6xl">Minha Stack</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {stackItems.map((item) => (
            <div key={item} className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder%20image-qP9VJbxHgx8jC1PrbTOuHVhxvZOPwl.png"
                alt={`Tech stack item ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

