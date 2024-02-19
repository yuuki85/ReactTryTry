import React from "react";

export function ProjectContainer({ imgSource, altText, projectText }) {
  return (
    <div className="text-container">
      <div className="image-container">
        <a href="project.html">
          <img className="img-fluid" src={imgSource} alt={altText} />
        </a>
      </div>
      <p>{projectText}</p>
    </div>
  );
}
