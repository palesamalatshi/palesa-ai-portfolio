import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaGoogle,
  FaVideo,
  FaShoppingCart
} from "react-icons/fa";

import { SiCanva } from "react-icons/si";

function Skills() {

  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={40} />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt size={40} />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs size={40} />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact size={40} />, color: "text-cyan-400" },
    { name: "Git", icon: <FaGitAlt size={40} />, color: "text-orange-600" },
    { name: "GitHub", icon: <FaGithub size={40} />, color: "text-white" },
    { name: "OpenCart", icon: <FaShoppingCart size={40} />, color: "text-pink-400" },
    { name: "Canva", icon: <SiCanva size={40} />, color: "text-purple-400" },
    { name: "Google Workspace", icon: <FaGoogle size={40} />, color: "text-green-400" },
    { name: "Zoom", icon: <FaVideo size={40} />, color: "text-blue-300" },
  ];

  return (
    <section className="px-6 py-24 bg-black/30 backdrop-blur-md text-white">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Skills & Tools
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:bg-purple-600/30 hover:text-white transition duration-300 cursor-pointer"
          >

            <div className={`${skill.color} text-4xl md:text-5xl`}>
              {skill.icon}
            </div>

            <p className="text-gray-200 text-sm md:text-base text-center font-medium">
              {skill.name}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;