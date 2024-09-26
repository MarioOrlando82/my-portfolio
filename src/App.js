import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import StalkingTimer from "./components/StalkingTimer";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Project from "./components/Project";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />
      <main className="flex-grow">
        <section id="about" className="py-16">
          <Hero />
        </section>
        <section id="experiences" className="py-16">
          <Experience />
        </section>
        <section id="projects" className="py-16">
          <Project />
        </section>
        <section id="skills" className="py-16">
          <Skill />
        </section>
        <section id="educations" className="py-16">
          <Education />
        </section>
      </main>
      <StalkingTimer />
      <Footer />
    </div>
  );
}

export default App;