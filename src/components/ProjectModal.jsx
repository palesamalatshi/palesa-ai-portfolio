import React, { useEffect } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiOpenai } from "react-icons/si";

const techIcons = {
  "React": <FaReact className="text-cyan-400" />,
  "HTML": <FaHtml5 className="text-orange-500" />,
  "HTML5": <FaHtml5 className="text-orange-500" />,
  "CSS": <FaCss3Alt className="text-blue-500" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
  "JavaScript": <FaJs className="text-yellow-400" />,
  "JS": <FaJs className="text-yellow-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "Tailwind": <SiTailwindcss className="text-teal-400" />,
  "OpenCV": <SiOpenai className="text-green-400" /> // placeholder
};

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/90 backdrop-blur-lg p-4">
      {/* Modal container */}
      <div className="relative bg-black/80 backdrop-blur-md border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-gray-800/60 hover:bg-gray-700/80 rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg z-50"
        >
          ×
        </button>

        {/* Video */}
        <div className="relative h-64 md:h-96 overflow-hidden rounded-t-3xl">
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-black/30 rounded-t-3xl"></div>
        </div>

        {/* Content */}
        <div className="p-6 text-white space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
          <p className="text-gray-300 text-lg">{project.description}</p>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {project.vision && (
              <div>
                <h3 className="font-semibold text-lg text-purple-400">Vision</h3>
                <p className="text-gray-200 text-sm md:text-base">{project.vision}</p>
              </div>
            )}
            {project.challenges && (
              <div>
                <h3 className="font-semibold text-lg text-purple-400">Challenges</h3>
                <p className="text-gray-200 text-sm md:text-base">{project.challenges}</p>
              </div>
            )}
            {project.process && (
              <div>
                <h3 className="font-semibold text-lg text-purple-400">Process</h3>
                <p className="text-gray-200 text-sm md:text-base">{project.process}</p>
              </div>
            )}
            {project.result && (
              <div>
                <h3 className="font-semibold text-lg text-purple-400">Result</h3>
                <p className="text-gray-200 text-sm md:text-base">{project.result}</p>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-4">
            {project.tech.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full hover:bg-purple-600 hover:text-white transition"
              >
                {techIcons[t] || null}
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-purple-600 rounded-xl hover:bg-purple-500 transition"
              >
                View Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-500 rounded-xl hover:bg-gray-800 transition"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;