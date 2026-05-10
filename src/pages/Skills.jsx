function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
  ]

  return (
    <section>
      <h2>Skills</h2>

      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </section>
  )
}

export default Skills