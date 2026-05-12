function Skills() {

  const skills = [
    'HTML', 'CSS', 'JavaScript',
    'React', 'Node.js', 'Express',
    'MongoDB', 'Git', 'GitHub'
  ]

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition shadow-md border border-gray-800"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills