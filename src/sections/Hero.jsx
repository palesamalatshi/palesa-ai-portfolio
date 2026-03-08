import { useState, useEffect } from "react";

function Hero({ openChat }) {
  const fullName = "Palesa Malatshi";
  const [displayName, setDisplayName] = useState("");
  const [index, setIndex] = useState(0);

  // Typing animation for your name
  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayName((prev) => prev + fullName[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index, fullName]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-60"
        style={{ 
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?q=80&w=829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-100/20 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">

        <p className="text-sm uppercase tracking-widest text-gray-600 font-medium">
          Frontend Developer Portfolio
        </p>

        {/* Animated Name */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg tracking-tight">
          {displayName}
          <span className="animate-pulse text-purple-600">|</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mt-4 font-semibold italic animate-fadeIn">
          Frontend Developer building clean interfaces — and occasionally winning arguments with JavaScript.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          
          {/* AI Chat */}
          <button 
            onClick={openChat}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:scale-105 hover:from-pink-500 hover:to-purple-600 transition transform shadow-lg animate-bounce-once font-medium"
          >
            Ask My AI
          </button>

          {/* More About Me */}
          <a 
            href="#about"
            className="px-8 py-3 border border-gray-400 text-gray-900 rounded-xl hover:bg-gray-200 transition shadow-lg font-medium"
          >
            More About Me
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero;