export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">DevFolio</h1>
        <div className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="/skills" className="text-gray-700 hover:text-blue-600">Skills</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
