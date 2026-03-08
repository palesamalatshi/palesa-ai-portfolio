// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

function Layout() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <Projects />
      <Outlet /> {/* CaseStudy will render here */}
    </div>
  );
}

export default Layout;