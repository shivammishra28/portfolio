import React from "react";
import "./Skills.css";
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub,
  FaNodeJs,  FaAngular, FaJsSquare
} from "react-icons/fa";
import {
  SiKotlin, SiTypescript, SiTailwindcss, SiRedux, 
  SiJetpackcompose, SiExpress, SiDjango, SiSpringboot, SiMongodb,
  SiMysql, SiSqlite, SiAppwrite, SiPostman
} from "react-icons/si";

const skills = [
//   { name: "Java", icon: <FaJava /> },
//   { name: "Kotlin", icon: <SiKotlin /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
//   { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "React", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
//    { name: "React Native", icon: <SiReactnative /> },
  { name: "AngularJS", icon: <FaAngular /> },
//   { name: "Compose", icon: <SiJetpackcompose /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
//   { name: "SQLite", icon: <SiSqlite /> },
  { name: "Appwrite", icon: <SiAppwrite /> },
  { name: "Postman", icon: <SiPostman /> },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="title">My <span className="highlight">Skills</span></h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <p className="label">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
