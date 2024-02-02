import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kshitij Narkhede </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            <br />
            I am currently persuing <span className="purple">Bachelor of Technology</span> in field of <span className="purple">Computer engineering</span> at <span className="purple">Vishwakarama Institute of Information Technology, Pune.</span>
            <br />
            
            
            <br />
            Apart from coding, some other activities that I ❤️ to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Organising events
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life begins at end of comfort zone !"{" "}
          </p>
          <footer className="blockquote-footer">Kshitij Narkhede</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
