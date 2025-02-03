import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; 
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="about-description">
            <h1 style={{ fontSize: "3em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="about-body">
              I am a passionate software developer with a diverse skill set, including gaining hands-on experience as an AWS Cloud Architect and DevOps Intern. I enjoy tackling complex challenges and building efficient, scalable solutions.
              <br />
              <br />
              I specialize in the following technologies:
              <i>
                <b className="purple"> MERN Stack (MongoDB, Express.js, React, Node.js) </b>
              </i>
              and have hands-on experience with cloud services, including
              <i>
                <b className="purple"> AWS (Amazon Web Services)</b>
              </i>
              and DevOps practices.
              <br />
              <br />
              Currently, I am gaining hands-on experience as an AWS Cloud Architect Intern, where I am learning to design and manage cloud infrastructures, deploy applications, and optimize systems for performance, scalability, and security.
              <br />
    
              <br />
              I also work with modern JavaScript libraries and frameworks, such as:
              <i>
                <b className="purple"> React.js, Next.js, and Express.js</b>
              </i>
              .
              <br />
              <br />
              I am always eager to learn new tools and technologies, as well as collaborate with others on impactful projects that make a real-world difference.
            </p>
          </Col>
          <Col md={4} className="myAvatar ">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
