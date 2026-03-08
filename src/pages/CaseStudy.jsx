// src/pages/CaseStudy.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function CaseStudy() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === parseInt(projectId));

  if (!project) return <p className="text-white">Project not found</p>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6">{project.description}</p>
      <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
      <ul className="mb-6">
        {project.tech.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
      <video src={project.video} controls className="w-full h-64 object-cover" />
    </div>
  );
}

export default CaseStudy;