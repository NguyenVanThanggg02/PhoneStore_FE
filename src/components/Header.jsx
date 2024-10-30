import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//check check
import {
  EnvelopeFill,
  GeoAltFill,
  PersonCircle,
  TelephoneFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../style/header.css";

const Header = () => {
  return (
    <Container fluid>
      <div>
        <Row className="header">
          <Col md={7} xs={12} sm={6} className="header-item d-flex text-white">
            <Col md={6} sm={4} xs={4}>
              <TelephoneFill style={{ color: "red" }} /> +8423456
            </Col>
            <Col md={6} sm={4} xs={4}>
              <EnvelopeFill style={{ color: "red" }} /> dev@gmail
            </Col>
            
          </Col>
          <Col
            md={5}
            sm={6}
            xs={12}
            className="header-item d-flex text-white text-right  justify-content-end"
          >
            
            <Col md={4} sm={4} xs={4}>
              <Link className="text-white link-item" to="/contact">
              <GeoAltFill style={{ color: "red" }} />Address
              </Link>
            </Col>
            <Col
              md={8}
              sm={6}
              xs={12}
              className="d-flex justify-content-center  "
            >
              <Link to={"/sign_in"} className="text-white">
                <PersonCircle style={{ color: "red" }} /> Login
              </Link>
            </Col>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Header;
