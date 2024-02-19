import React from "react";

export function AboutColumn({ title, content, timeline, columnClass }) {
  return (
    <div className={`col-lg-4`}>
      <div className={`text-container ${columnClass}`}>
        {title && <h2>{title}</h2>}
        {content && <p>{content}</p>}
        {timeline && (
          <>
            {timeline.map((item, index) => (
              <React.Fragment key={index}>
                <div className="time">{item.time}</div>
                <h6>{item.role}</h6>
                <p>{item.description}</p>
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
