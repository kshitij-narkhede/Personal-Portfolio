import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";
import Particle from "../Particle";
import Blog1 from "./Blog1";
import "./Blog.css"
import Blg from "../../Assets/Projects/Blog1.png"
function Blog() {
  return (
    
    <Container fluid className="myblog-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Blogs on <strong className="purple">Trending Topics</strong>
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={20} className="myblog-card">
            <BlogCard 
            description={<Blog1/>}/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
