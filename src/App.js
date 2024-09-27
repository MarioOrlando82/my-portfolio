import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import StalkingTimer from "./components/StalkingTimer";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Project from "./components/Project";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />
      <main className="flex-grow">
        <section id="about" className="pt-16 hidden-section">
          <Hero />
        </section>
        <section id="experiences" className="pt-28 hidden-section">
          <Experience />
        </section>
        <section id="projects" className="pt-28 hidden-section">
          <Project />
        </section>
        <section id="skills" className="pt-20 hidden-section">
          <Skill />
        </section>
        <section id="educations" className="pt-28 hidden-section">
          <Education />
        </section>
      </main>
      <StalkingTimer />
      <Footer />
    </div>
  );
}

export default App;
