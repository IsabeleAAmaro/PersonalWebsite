export default function Stack() {
  // Array com os caminhos das imagens e seus nomes alternativos
  const stackImages = [
    { src: "/java.svg", alt: "Java" },
    { src: "/python.svg", alt: "Python" },
    { src: "/spring.svg", alt: "Spring" },
    { src: "/django.svg", alt: "Django" },
    { src: "/react.svg", alt: "React" },
    { src: "/angular.svg", alt: "Angular" },
    { src: "/r.svg", alt: "R" },
    { src: "/oracle.svg", alt: "Oracle" },
    { src: "/mongoDB.svg", alt: "MongoDB" },
    { src: "/postgres.svg", alt: "PostgreSQL" },
    { src: "/PowerPlatform.svg", alt: "Power Plataform" },
    { src: "/linux.svg", alt: "Linux" },
  ];

  return (
    <section id="stack" className="min-h-fit py-16 px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-center md:justify-end mb-16">
          <div className="border-l-2 border-primary pl-8 text-center md:text-right">
            <h2 className="heading text-5xl md:text-6xl">Minha Stack</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {stackImages.map((image, index) => (
            <div key={index} className="aspect-square rounded-md flex items-center justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain p-3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
