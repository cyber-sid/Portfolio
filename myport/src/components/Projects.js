import { Container, Row, Col, Tab, Nav, Navbar } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/amazon.png";
import projImg2 from "../assets/img/anime.png";
import projImg3 from "../assets/img/movie.png";
import projImg4 from "../assets/img/invest.png";
import projImg5 from "../assets/img/port.png";
import projImg6 from "../assets/img/grocery.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React from "react";
import Button from "react-bootstrap/Button";

export const Projects = () => {
  const onButtonClick = () => {
    fetch("Siddharth_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Siddharth_Resume.pdf";
        alink.click();
      });
    });
  };
  const projects = [
    {
      title: "Amazon Clone",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "Grocery Shopping",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Movie Application",
      description: "Design",
      imgUrl: projImg3,
    },
    {
      title: "Anime Browser",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Investment Website",
      description: "Design",
      imgUrl: projImg4,
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Resume</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <h2 style={{ marginBottom: "50px" }}>Projects</h2>
                      <Row>
                        {projects.map((project, index) => {
                          return (
                            <React.Fragment key={index}>
                              <ProjectCard {...project} />
                            </React.Fragment>
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p style={{ textAlign: "left" }}>
                        <span>Undergraduate :</span>
                        <br />
                        Ajay Kumar Garg Engineering College (2019 - 23) <br />-
                        B.Tech, Computer Science and Engineering{" "}
                      </p>
                      <p style={{ textAlign: "left" }}>
                        Senior and Higher Secondary School :<br /> Sunbeam
                        Varuna (2016 - 18)
                        <br />
                        - Class XII (84%) <br />- Class X (9.6 CGPA)
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        <Button
                          variant="outline-light"
                          style={{ padding: "20px 40px" ,marginTop:"40px"}}
                          onClick={onButtonClick}
                        >
                          Download CV
                        </Button>
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  );
};
