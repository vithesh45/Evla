import React from "react";
import "../styles/projects.css";



export default function Projects() {
  const projects = [
    {
      title: "ELVA PMS",
      description: "Residential/Commercial Real Estate Plot Management Software.",
      about:"ELVA EMS is an Electrical Contract Management Software that streamlines electrical project planning and execution. It provides tools to monitor contracts, schedule work, manage resources, and ensure compliance with safety standards.  This software boosts efficiency and ensures smooth project operations for electrical contractors.",
      image: "/assets/OIP.jpg", // Replace with real project image

    },
    {
      title: "ELVA EMS",
      description: "Electrical Contract Management Software.",
      about: " ELVA PMS is a Residential and Commercial Real Estate Plot Management Software.It helps property developers and agents track plots, manage sales, and maintain records efficiently.The software is designed to reduce errors, simplify reporting, and improve customer management.",
      image: "/assets/OIP.jpg",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="section-title">Our Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <h4>{project.description}</h4>
            <p>{project.about}</p>
            {/* <button className="project-btn">View More</button> */}
          </div>
        ))}
      </div>
      
    </div>
  );
}
