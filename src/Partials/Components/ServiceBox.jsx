import React from "react";

export function ServiceBox({ iconClass, title, description }) {
  return (
    <div className="col-lg-4 ">
      <div className="text-box text-center">
        <i className={iconClass}></i>
        <h4>{title}</h4>
        <p className="text-sm-left">{description}</p>
      </div>
    </div>
  );
}
