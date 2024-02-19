import { AboutColumn } from "./Components/AboutColumn";
import React from 'react';

export function About() {
  return (
    <div id="about" className="basic-1 bg-gray">
      <div className="container">
        <div className="row">
          <AboutColumn
            title="Hi there I'm Mark,"
            content="And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch"
            columnClass="first"
          />
          <AboutColumn
            timeline={[
              {
                time: "2019 - PRESENT",
                role: "Freelance Web Developer",
                description: "Working happily on my own web projects",
              },
              {
                time: "2018 - 2019",
                role: "Lead Web Developer",
                description: "Beautiful project for a major digital agency",
              },
            ]}
            columnClass="second"
          />
          <AboutColumn
            timeline={[
              {
                time: "2017 - 2018",
                role: "Senior Web Designer",
                description: "In-house web designer for ecommerce firm",
              },
              {
                time: "2016 - 2017",
                role: "Junior Web Designer",
                description: "Junior web designer for a small web agency",
              },
            ]}
            columnClass="third"
          />
        </div>
      </div>
    </div>
  );
}
