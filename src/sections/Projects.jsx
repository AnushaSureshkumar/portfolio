import "./Projects.css";
import { useEffect } from "react";

import agriassist from "../assets/agriassist.jpg";
import code369 from "../assets/code369.jpg";
import skillswap from "../assets/skillswap.jpg";

export default function Projects() {

  const projects = [
    {
      title: "AgriAssist - Smart Crop Symptom Reporter",
      desc: "CLI based agriculture tool that predicts crop diseases and suggests treatments.",
      tech: ["Python", "MySQL"],
      image: agriassist,
      link: "https://github.com/anushaSureshkumar"
    },
    {
      title: "Code369 - Academic Learning Platform",
      desc: "Frontend academic website built using React with a modern UI for educational resources.",
      tech: ["React", "Frontend"],
      image: code369,
      link: "https://code369.in"
    },
    {
      title: "AI SkillSwap",
      desc: "AI powered skill exchange platform that matches partners and suggests skills using Hugging Face models.",
      tech: ["React", "Flask", "MySQL", "AI"],
      image: skillswap,
      link: "https://github.com/anushaSureshkumar"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">

      <div className="projects-container">

        <h2 className="section-title reveal">
          MY <span className="neon-accent">PROJECTS</span>
        </h2>

        <div className="projects-grid">

          {projects.map((project, i) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card reveal"
              key={i}
              style={{ "--i": i }}
            >
              <div className="project-image">
                <img src={project.image} alt="project" />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((t, index) => (
                    <span key={index}>{t}</span>
                  ))}
                </div>
              </div>

            </a>
          ))}

        </div>

      </div>

    </section>
  );
}

