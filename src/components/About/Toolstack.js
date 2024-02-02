import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { DiWindows } from "react-icons/di";
import { Icon } from '@iconify/react';
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="fa:windows" color="blue" />
      <h5>Microsoft Windows</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="logos:linux-tux"  />
      <h5>Linux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="devicon:vscode" />
        <h5>Visual Studio Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="logos:jira" />
      <h5>Jira</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="devicon:github" color="blue" />
      <h5>Github</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
