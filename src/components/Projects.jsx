function Projects() {

  const projects = [
    {
      title: "Weather App",
      desc: "Real-time weather application using API",
    },
    {
      title: "E-Commerce System",
      desc: "Full-stack Laravel shopping system",
    },
    {
      title: "AI Data Project",
      desc: "Machine learning data analysis project",
    }
  ]

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition border border-gray-800"
          >

            <h3 className="text-xl font-bold text-blue-400 mb-2">
              {p.title}
            </h3>

            <p className="text-gray-300">
              {p.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects