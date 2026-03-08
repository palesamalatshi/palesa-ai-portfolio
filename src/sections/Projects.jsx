// src/sections/Projects.jsx
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="relative min-h-screen px-6 py-20">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white drop-shadow-lg">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/30 backdrop-blur-md rounded-3xl p-4 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openModal(project)}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}

export default Projects;