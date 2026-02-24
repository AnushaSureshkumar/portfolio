import "./Hero.css";
import { useEffect, useState } from "react";
import avathar from "../assets/avathar.png";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "Software Developer"
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div>
        <div className="hero-wrapper">
          
          <div className="hero-content">
            <h1>
              Hi, I'm <span className="neon-accent">Anusha</span>
            </h1>

            <h2 className={`hero-role ${fade ? "show" : "hide"}`}>
              {roles[index]}
            </h2>

            <div className="hero-buttons">
              <a href="/Resume.pdf" target="_blank" className="neon-btn">Resume</a>
              <a href="https://github.com/anushaSureshkumar" target="_blank" className="ghost-btn">GitHub</a>
              <a href="https://www.linkedin.com/in/anushas04/" target="_blank" className="ghost-btn">LinkedIn</a>
            </div>
          </div>

          <div className="hero-avatar">
            <img src={avathar} alt="avatar"/>
          </div>

        </div>
      </div>
    </section>
  );
}