import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Cart3, CartDashFill } from "react-bootstrap-icons";
import logo from "../../src/assets/images/logo.jpg";
const Banner = () => {
  return (
    <Container fluid className="Banner ">
      <Row>
        <Col
          md={3}
          xs={12}
          sm={6}
          className="text-white d-flex justify-content-center"
        >
          <a href="/" className="text-white">
            {/* <img src={logo} style={{ width: "100px" }} /> */}
            Phone
          </a>
        </Col>
        <Col md={6} xs={12} sm={6} className="d-flex justify-content-center search ">
          <select
            className="items_option"
            style={{ width: "auto", paddingLeft: "10px" }}
          >
            <option value="0">Iphone</option>
            <option value="1">Oppo</option>
            <option value="2">SamSung</option>
          </select>
          <input
            type="text"
            placeholder="Search here..."
            style={{ width: "50%" }}
          ></input>
          <Button
            type="submit"
            className="btn btn-danger"
            style={{ fontWeight: "bold" }}
          >
            Search
          </Button>
        </Col>
        <Col
          md={3}
          xs={12}
          sm={6}
          className="text-right d-flex justify-content-center"
        >
          <CartDashFill style={{ color: "white", fontSize: "30px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
