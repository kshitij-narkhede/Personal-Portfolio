import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import surksha from "../../Assets/Projects/surksha.png";
import emotion from "../../Assets/Projects/emotion.png";
import Learnspace from "../../Assets/Projects/Learnspace.png";
import SIP from "../../Assets/Projects/SIP.png";
import suicide from "../../Assets/Projects/suicide.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import student from "../../Assets/Projects/Studentbank.png";
import "./Procard.css"
function Projects() {
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
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Learnspace}
              isBlog={false}
              title="Learnspace"
              description="This project is an evidence-based education solution for India, provides teachers with a simplified dashboard to track student progress and offer targeted support, featuring interactive tools, assessments, and collaboration, along with simplified self-study through flashcards based on Spaced Repetition"
              ghLink="https://github.com/Kshitijnark/Project1"
              demoLink="/"
              // tech1="NLP"
              // tech2=""
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={SIP}
              isBlog={false}
              title="Sensor integrated chatbot"
              description="This project is a stress management AI bot (RASA- NLP Framework) that is integrated with a HRV-GSR sensor to collect real-time data about the user's stress levels and Heart-Rate. This data can then be used to personalize the bot's responses and provide more effective stress management advice."
              ghLink="https://github.com/Kshitijnark/Binary_Brain"
              demoLink="https://drive.google.com/file/d/15zVeodKEYMma6bEcoqkqw0ERxIkkDnuH/view"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="VIIT Student Bank"
              description="College is a time of great change and financial responsibility. As a college student, you need a way to manage your finances and stay on top of your bills. This PHP-MySQL web application allows college students to do just that."
              ghLink="https://github.com/Kshitijnark/Student-Wallet"
              demoLink="/"              
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="This project is a personal portfolio website that I built to showcase my skills and experience as a React developer. The website is built using React JS, Redux, and Material UI. It features a variety of pages, including an about page, a skills page, a projects page, and a contact page."
              ghLink="https://github.com/Kshitijnark/Myportfolio2.0"
              demoLink="/"
            />
            
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={surksha}
              isBlog={false}
              title="My-Surksha"
              description="A health card for accident prevention is a document that contains information about your health and medical history. This information can be used to help you prevent accidents by identifying any potential risks."
              ghLink="https://github.com/Kshitijnark/SPHH_Team10"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
