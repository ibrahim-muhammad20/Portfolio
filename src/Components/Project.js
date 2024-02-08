import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Long2 from "../Images/Long2.PNG"
import Longform from "../Data/Longform"
import Shortform from "../Data/ShortForm"
import Automation from "../Data/Automation"

// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                  Over the course of my extensive 4+ years in video editing!<br></br>I have honed my skills across a diverse range of genres. 
                  So have a look at some of the best videos I have edited for my clients!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                        <Nav.Item>
                      <Nav.Link eventKey="first">Long-Form Edits</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Short-Form Edits</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Youtube automation Edits</Nav.Link>
                    </Nav.Item>
                      {/* Your Nav.Item components */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {Longform.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      
                      <Tab.Pane eventKey="second">
                        <Row>
                          {Shortform.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      
                    <Tab.Pane eventKey="third">
                     
                    <Row>
                          {Automation.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>

                    </Tab.Pane>
                      {/* Other Tab.Pane components */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* Your other components */}
    </section>
  );
};
