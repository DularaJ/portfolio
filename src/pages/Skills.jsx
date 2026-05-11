function Skills() {

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'PHP',
    'Laravel',
  ]

  return (
    <section className="bg-gray-900 text-white py-20 px-10">
      
      <h2 className="text-4xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        
        {skills.map((skill, index) => (
          
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition shadow-lg"
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  )
}

export default Skills