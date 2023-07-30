import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  return (
    <>
    <Helmet>
        <title>Techiematter | Blog</title>
        <meta name="description" content="We are sharing with you 5 smart ways to retain your tech talents for long." />
      </Helmet>

      <section className="nav-blog">
        <Navbar className="  fixed-top   " style={{backgroundColor:"rgb(2, 21, 89)",marginBottom:"200px",}}>
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <img
                alt=""
                src="../images/logo.png"
                className="d-inline-block align-top"
              />
              <span className="beta">Beta</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="home-text">
                <a href="#login">Home</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      <section>
        <Container style={{marginTop:"100px"}}>
          <Row className="my-5">
            <Col  col-sm-12>
              <img
                className="blog-img rounded mb-3 mb-md-0 "
                src="../images/blog-img.png"
                alt=""
              />
            </Col>
            <Col  col-sm-12>
              <h3 className="text-blog">
                5 Insights from MENA Employers on Retaining Tech Talent
              </h3>
              <p className="pra-blog">
                You know what is the most painful thing right after teeth pain?
                Correctly, You hit it right. Tech Talents Retention. In this
                article, We are sharing with you 5 smart ways to retain your
                tech talents for long.
              </p>
              <a href="#" className="a-blog">Keep Reading</a>{" "}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
