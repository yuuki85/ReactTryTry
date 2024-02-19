import React from "react";

export function IconContainer() {
  const icons = [
    "details-icon-photoshop.png",
    "details-icon-illustrator.png",
    "details-icon-html.png",
    "details-icon-css.png",
    "details-icon-bootstrap.png",
    "details-icon-javascript.png",
  ];

  return (
    <div className="icons-container d-flex flex-wrap">
      {icons.map((icon, index) => (
        <img key={index} src={`src/images/${icon}`} alt="alternative" />
      ))}
    </div>
  );
}
