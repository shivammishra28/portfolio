import React from "react";
import "./ProjectExp.css";

export default function ProjectExperience() {
  return (
    <div className="project-experience-container">
      <h1 className="heading">
        Project <span className="highlight">Experience</span>
      </h1>
      <p className="description">
        While my journey hasn't included traditional work experience, I've dedicated
        myself to hands-on project development across various domains. This has
        equipped me with practical skills in web development, mobile app creation,
        and desktop application building. I'm excited to translate this diverse
        experience into a professional setting and contribute my skills to impactful
        projects.
      </p>

      <div className="content">
        <div className="card">
          <h2 className="card-title">Web Development Projects</h2>
          <h3 className="card-subtitle">Personal Projects</h3>
          <ul className="card-list">
            <li>
              Developed web applications using various technologies including React,
              Angular, Node.js, and Django.
            </li>
            <li>
              Implemented responsive design and ensured cross-browser compatibility.
            </li>
            <li>
              Created full-stack applications with features like authentication,
              database integration, and RESTful APIs.
            </li>
            <li>
              Utilized modern frontend frameworks and libraries such as Redux Toolkit,
              Tailwind CSS, and Bootstrap.
            </li>
          </ul>
        </div>

        <div className="timeline">
        <span>
          <div className="icon-container">
            <img src="https://skp3214.vercel.app/assets/desktop-Xv9aE0wo.png" alt="icon" className="icon" />
          </div>
        </span>
          <p className="timeline-text">2021 - Present</p>
        </div>
      </div>
    </div>
  );
}
