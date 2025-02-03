import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Particle from "../Particle";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="contact-heading">
          Get in <strong className="purple">Touch</strong>
        </h1>
        <p style={{ color: "white" }}>
          Feel free to reach out for collaborations or any inquiries.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="contact-card">
            <Card className="contact-card-view">
              <Card.Body>
                <Card.Title>Email</Card.Title>
                <Card.Text>
                  <AiOutlineMail /> &nbsp; developer@example.com
                </Card.Text>
                <Button variant="primary" href="mailto:developer@example.com">
                  Send Email
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="contact-card">
            <Card className="contact-card-view">
              <Card.Body>
                <Card.Title>LinkedIn</Card.Title>
                <Card.Text>
                  <AiFillLinkedin /> &nbsp; linkedin.com/in/developer
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://linkedin.com/in/developer"
                  target="_blank"
                >
                  View Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="contact-card">
            <Card className="contact-card-view">
              <Card.Body>
                <Card.Title>GitHub</Card.Title>
                <Card.Text>
                  <AiFillGithub /> &nbsp; github.com/developer
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/developer"
                  target="_blank"
                >
                  Visit GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
