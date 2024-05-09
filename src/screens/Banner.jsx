
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Cart3, CartDashFill } from "react-bootstrap-icons";
import logo from "../../src/assets/images/logo.jpg";

const Banner = () => {
  return (
    <Container fluid className="Banner">
      <Row>
        <Col md={3} xs={12} sm={6} className="text-white d-flex justify-content-center align-items-center">
          <a href="/" className="text-white">
            <img src={logo} style={{ width: "95px", borderRadius:'50%', height:'93px' }} />
          </a>
        </Col>
        <Col md={6} xs={12} sm={6} className="d-flex justify-content-center align-items-center search">
          <select className="items_option" style={{ width: "120px", paddingLeft: "10px",height: "38px" }}>
            <option value="0">Chọn hãng</option>
            <option value="1">Iphone</option>
            <option value="2">Oppo</option>
            <option value="3">SamSung</option>
            <option value="4">ALL</option>
          </select>
          <input type="text" placeholder="Search here..." style={{ width: "50%", height: "38px", paddingLeft:'30px' }} />
          <Button type="submit" className="btn btn-danger" style={{ fontWeight: "bold", height: "38px" }}>
            Search
          </Button>
        </Col>
        <Col md={3} xs={12} sm={6} className="text-right d-flex justify-content-center align-items-center">
          <CartDashFill style={{ color: "white", fontSize: "30px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;