import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

import ProjectModal from "./components/ProjectModal";
import AIChat from "./components/AIChat";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <div className="relative min-h-screen text-gray-900">

      {/* Global Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?q=80&w=829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Light overlay for softening */}
        <div className="absolute inset-0 bg-gray-100/40 backdrop-blur-sm"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main content – glassy cards */}
      <div className="relative z-10 flex flex-col gap-16 px-6 py-12 max-w-7xl mx-auto">

        <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-lg">
          <Hero openChat={() => setChatOpen(true)} />
        </div>

        <div id="projects" className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-lg">
          <Projects onProjectClick={handleProjectClick} />
        </div>

        <div id="skills" className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-lg">
          <Skills />
        </div>

        <div id="about" className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-lg">
          <About />
        </div>

        <div id="contact" className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-lg">
          <Contact />
        </div>

      </div>

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}

      {/* AI Chat */}
      {chatOpen && (
        <AIChat
          isOpen={chatOpen}
          onClose={() => setChatOpen(false)}
        />
      )}

    </div>
  );
}

export default App;