// src/components/ProjectCard.jsx
import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiOpenai } from "react-icons/si";

// Map tech names to icons
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

function ProjectCard({ title, description, tech, video, onClick }) {
  return (
    <div
      onClick={onClick}
      className="min-w-[320px] bg-black/40 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/20"
    >
      {/* Video Preview */}
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover filter brightness-75"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-100 text-sm md:text-base mb-3">{description}</p>

        {/* Tech icons + badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-1 bg-black/30 text-white/90 px-2 py-1 rounded-lg text-xs md:text-sm backdrop-blur-sm hover:bg-purple-600 hover:text-white transition"
            >
              {techIcons[t] || null}
              <span>{t}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;