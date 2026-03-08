import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-100/20 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Palesa Malatshi</h1>

        <ul className="flex gap-6 items-center text-gray-700 font-medium">
          <li>
            <a href="#projects" className="hover:text-purple-600 transition">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-purple-600 transition">Skills</a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-600 transition">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
          </li>
          <li>
            <a 
              href="/PalesaMalatshi_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;