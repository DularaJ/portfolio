function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-950 text-white px-10 py-5 flex justify-between items-center shadow-lg">
      
      <h1 className="text-2xl font-bold">
        Dulara
      </h1>

      <ul className="flex gap-8 text-lg">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Skills</li>
        <li className="hover:text-blue-400 cursor-pointer">Projects</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>

    </nav>
  )
}

export default Navbar