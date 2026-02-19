import "./Skills.css";
import { useEffect } from "react";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import { SiMysql, SiExpress, SiDjango, SiFlask } from "react-icons/si";

export default function Skills() {

  const skills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript (ES6+)" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <FaNodeJs />, name: "Node.js" },
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
    {
      threshold: 0.15,
    }
  );

  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => observer.observe(el));

  return () => {
    reveals.forEach((el) => observer.unobserve(el));
  };
}, []);



  return (
    <section id="skills" className="skills">

  <div className="skills-container">

    <h2 className="section-title reveal">

      TECH  <span className="neon-accent">STACK</span>
    </h2>

    <div className="skills-grid">
{skills.map((skill, i) => (
  <div
    className="skill-item reveal"
    key={i}
    style={{ "--i": i }}
  >
          <div className="skill-icon">{skill.icon}</div>
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>

  </div>

</section>

  );
}
