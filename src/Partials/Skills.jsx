import React from "react";
import { IconContainer } from "./Components/IconContainer";

export function Skills() {
  return (
    <div className="split">
      <div className="area-2 bg-gray w-100 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                <h2>Why Work With Me</h2>
                <p>
                  I am a great communicator and love to invest the necessary
                  time to understand the customer's problem very well
                </p>
                <h5>DESIGN TOOLS</h5>
                <p>
                  My favorite design tools are Photoshop and Illustrator but I
                  can create designs in Figma, Sketch and Adobe XD too
                </p>
                <h5>DEVELOPMENT SKILLS</h5>
                <p>
                  I am familiar and work on a daily basis with HTML, CSS,
                  JavaScript, Bootstrap and other modern frameworks
                </p>
                <IconContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
