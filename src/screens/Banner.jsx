import React from "react";
import { Button, Col, Container, Image, Nav, Row } from "react-bootstrap";
import { Cart3, CartDashFill } from "react-bootstrap-icons";
import logo from "../../src/assets/images/logo.jpg";
import "../style/banner.css";


const Banner = () => {
  return (
    <Container fluid className="Banner">
      <Row>
        <Col
          md={2}
          xs={12}
          sm={6}
          className="text-white d-flex justify-content-start align-items-center"
        >
          <a href="/" className="text-white" style={{ marginTop: "-15px" }}>
            <img
              src={logo}
              style={{ width: "96px", borderRadius: "50%", height: "93px" }}
            />
          </a>
        </Col>
        <Col
          md={8}
          xs={12}
          sm={6}
          className="d-flex justify-content-center align-items-center "
          style={{
            border: "1px solid #CCCC",
            height: "60px",
            borderRadius: "20px",
            backgroundColor: "#FFFF",
          }}
        >
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">
                <h6>Home</h6>
              </Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item>
              <Nav.Link href="/listproduct">
                <h6>List Products</h6>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">
                <h6>Contact</h6>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blog">
                <h6>Blog</h6>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col
          md={2}
          xs={12}
          sm={6}
          className="text-right d-flex justify-content-center align-items-center"
        >
          <CartDashFill
            style={{ color: "white", fontSize: "30px", marginTop: "-15px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
