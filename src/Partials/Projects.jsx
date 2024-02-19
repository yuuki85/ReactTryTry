import React from "react";
import { ProjectContainer } from "./Components/ProjectContainer";

export function Projects() {
  return (
    <div id="projects" className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading">Delivered projects</h2>
            <p className="p-heading">
              Listed below are some of the most representative projects I've
              worked on. They range from basic web design for presentation sites
              to advanced web development for online shops
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ProjectContainer
              imgSource="src/images/project-1.jpg"
              altText="alternative"
              projectText={
                <>
                  <strong>For:</strong> Jumbotron, <strong>Project:</strong> web
                  design for their corporate websites and landing pages for
                  marketing campaigns details
                </>
              }
            />
            <ProjectContainer
              imgSource="src/images/project-2.jpg"
              altText="alternative"
              projectText={
                <>
                  <strong>For:</strong> Carsrepo, <strong>Project:</strong>{" "}
                  designed and developed a modern platform for purchasing
                  second-hand cars online details
                </>
              }
            />
          </div>
          <div className="basic-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="text-container">
                    <div className="image-container">
                      <a href="project.html">
                        <img
                          className="img-fluid"
                          src="src/images/work-1.jpg"
                          alt="alternative"
                        />
                      </a>
                    </div>
                    <p>
                      <strong>For:</strong> Zigoland, <strong>Project:</strong>{" "}
                      started a new website from the ground up for a new product{" "}
                      <a className="blue" href="project.html">
                        details
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="text-container">
                    <div className="image-container">
                      <a href="project.html">
                        <img
                          className="img-fluid"
                          src="src/images/work-2.jpg"
                          alt="alternative"
                        />
                      </a>
                    </div>
                    <p>
                      <strong>For:</strong> Visodream, <strong>Project:</strong>{" "}
                      developed a new forum for the Visodream community{" "}
                      <a className="blue" href="project.html">
                        details
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="text-container">
                    <div className="image-container">
                      <a href="project.html">
                        <img
                          className="img-fluid"
                          src="src/images/work-3.jpg"
                          alt="alternative"
                        />
                      </a>
                    </div>
                    <p>
                      <strong>For:</strong> Primoday, <strong>Project:</strong>{" "}
                      complete redesign of their corporate website and platform{" "}
                      <a className="blue" href="project.html">
                        details
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="text-container">
                    <div className="image-container">
                      <a href="project.html">
                        <img
                          className="img-fluid"
                          src="src/images/work-4.jpg"
                          alt="alternative"
                        />
                      </a>
                    </div>
                    <p>
                      <strong>For:</strong> Nextlite, <strong>Project:</strong>{" "}
                      created a custom video editing and upload web app{" "}
                      <a className="blue" href="project.html">
                        details
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="text-container">
                    <div className="image-container">
                      <a href="project.html">
                        <img
                          className="img-fluid"
                          src="src/images/work-5.jpg"
                          alt="alternative"
                        />
                      </a>
                    </div>
                    <p>
                      <strong>For:</strong> Syncnow, <strong>Project:</strong>{" "}
                      web design for their corporate websites and landing pages{" "}
                      <a className="blue" href="project.html">
                        details
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="text-container">
                    <div className="image-container">
                      <a href="project.html">
                        <img
                          className="img-fluid"
                          src="src/images/work-6.jpg"
                          alt="alternative"
                        />
                      </a>
                    </div>
                    <p>
                      <strong>For:</strong> Shifter, <strong>Project:</strong>{" "}
                      started a new website from the ground up for a new product{" "}
                      <a className="blue" href="project.html">
                        details
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
