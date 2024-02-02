import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiCplusplus,
  SiTensorflow,
} from "react-icons/si";
import { Icon } from '@iconify/react';
import { TbBrandGolang } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="devicon:java" color="blue" />
        <h5>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="devicon:cplusplus" color="blue" />
      <h5>C + +</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="logos:python" color="blue" />
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="eos-icons:machine-learning" color="white" />
        <h5>Machine Learning</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="logos:react" color="white" />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="logos:nodejs" color="white" />
        <h5>Node JS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="logos:mongodb-icon" color="white" />
        <h5>MongoDB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="devicon:firebase" color="white" />
        <h5>Firebase</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="devicon:tensorflow" color="white" />
        <h5>Tensorflow</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="devicon:git" color="white" />
        <h5>Git & Github</h5>
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
