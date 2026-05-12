function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-400">Dulara</span>
      </h1>

      <p className="text-xl text-gray-300 max-w-xl mb-6">
        Software Engineering Undergraduate | Full Stack Developer | Tech Enthusiast
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          View Projects
        </button>

        <button className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transition">
          Contact Me
        </button>
      </div>

    </section>
  )
}

export default Home