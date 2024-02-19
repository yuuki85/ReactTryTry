import React from "react";
import { ServiceBox } from "./Components/ServiceBox";

export function Services() {
  return (
    <div id="services" className="basic-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading">Offered services</h2>
            <p className="p-heading">
              Web design and development have been my bread and butter for more
              than 5 years. During that time, I've discovered that I can help
              startups and companies with the following services
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-start">
          <ServiceBox
            iconClass="far fa-gem"
            title="DESIGN"
            description="Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth"
          />
          <ServiceBox
            iconClass="fas fa-code"
            title="DEVELOPMENT"
            description="I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability"
          />
          <ServiceBox
            iconClass="fas fa-tv"
            title="BASIC SEO"
            description="I can set up your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money"
          />
        </div>
      </div>
    </div>
  );
}
