import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weapon Inventory Managemenet System",
      description: "Our weapon and inventory management system lets admins add room incharges and assign signature th the authorities. Room incharges can add weapons and assign them to soldiers after signatures of the authorities. Soldiers have to sign for weapon use, and when returning they have to give remark for any damages, if damage happens weapon will automatically added to damaged section. Using the unique number of gun they can see the condition of gun, how much it is fired , assigned to which soldier and many more. Admin can track weapon usage, assignments, conditions, and daily entries for thorough oversight.",
      image: chatify,
      github: "https://github.com/soumyajit4419/Chatify",
      demo: "https://chatify-49.web.app/",
    },
    {
      id: 2,
      title: "Bits-0f-C0de",
      description: "My personal blog page built with Next.js and Tailwind CSS. Supports dark mode and renders content from markdown files using Next.js.",
      image: bitsOfCode,
      github: "https://github.com/soumyajit4419/Bits-0f-C0de",
      demo: "https://blogs.soumya-jit.tech/",
    },
    {
      id: 3,
      title: "Editor.io",
      description: "Online code and markdown editor built with React.js, supporting HTML, CSS, JS code with live preview, and markdown support for README files.",
      image: editor,
      github: "https://github.com/soumyajit4419/Editor.io",
      demo: "https://editor.soumya-jit.tech/",
    },
    {
      id: 4,
      title: "Plant AI",
      description: "Trained an image classifier model using PyTorch and CNN for plant disease detection. Achieved 98% accuracy using ResNet34 pre-trained model.",
      image: leaf,
      github: "https://github.com/soumyajit4419/Plant_AI",
      demo: "https://plant49-ai.herokuapp.com/",
    },
    {
      id: 5,
      title: "AI For Social Good",
      description: "Used NLP for detecting suicide-related posts and ideation, helping in suicide prevention.",
      image: suicide,
      github: "https://github.com/soumyajit4419/AI_For_Social_Good",
      demo: "",
    },
    {
      id: 6,
      title: "Face Recognition and Emotion Detection",
      description: "Trained a CNN classifier for emotion detection and face recognition using FER-2013 dataset. Achieved 60.1% accuracy.",
      image: emotion,
      github: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
      demo: "",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} key={project.id} className="project-card">
              <Card className="project-card-view">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {project.description}
                  </Card.Text>
                  {project.github && (
                    <Button variant="primary" href={project.github} target="_blank">
                      <BsGithub /> &nbsp;GitHub
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="primary"
                      href={project.demo}
                      target="_blank"
                      style={{ marginLeft: "10px" }}
                    >
                      <CgWebsite /> &nbsp;Demo
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
