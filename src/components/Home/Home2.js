import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import "./Home2.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section home2bg" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span>
            </h1>
            <p className="home-about-body">
              A Competitive Programmer and MERN developer , who creates applications and websites as per design-content needs, also excellent in <span className="purple" style={{fontWeight:"bolder"}}>Data Structures and Algorithms</span> and <span className="purple" style={{fontWeight:"bolder"}}>problem solving</span> .... 😎
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, C++ and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Innovative application using MERN along with Artificial Inteliigence 🤖</b> and
                also in areas related to{" "}
                <b className="purple">
                  Algorithms.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also participate in Coding contests and Hackathons. 
              <br/>And, I love ❤️ Programming. 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid bitmoji" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <br></br>
          <Col md={12} className="home-about-social">
            <h1>👨‍💻 Connect me on</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kshitijnark"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/kshitijnark"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kshitij-narkhede-36090a225/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kshitij_vn10"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
