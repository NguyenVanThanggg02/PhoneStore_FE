import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartDashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import TopSelling from "./TopSelling";
import NewProducts from "./NewProducts";
import TopSellingCategory from "./TopSellingCategory";

const Home = () => {
  const [home, setHome] = useState(true);
  const [list, setList] = useState(false)

  const handleHome = () => {
    setHome(true);
    setList(false);
    
  };

  const handleList = () => {
    setHome(false);
    setList(true);
  };


  return (
    <Container>
      <Row className="home">
        <Col md={8} sm={8} xs={8}>
          <ul className="link-item">
            <li>
              <h6>
              <Link className="text-dark link-item" to="/" onClick={handleHome}>
                  Home
                </Link>
              </h6>
            </li>
            <li className="link-item">
              <h6>
              <Link className="text-dark" to="/listproduct" onClick={handleList}>
                  List Product
                </Link>
              </h6>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className=" home-category d-flex justify-content-between ">
        <Col md={4} sm={6} xs={12}>
          <Link to={"/details"}>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
              />
            </Card>
          </Link>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Link to={"/details"}>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
              />
            </Card>
          </Link>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Link to={"/details"}>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
              />
            </Card>
          </Link>
        </Col>
      </Row>

      <Row>
        <NewProducts />
      </Row>
      <Row>
        <TopSelling />
      </Row>
      <Row>
        <TopSellingCategory />
      </Row>
    </Container>
  );
};

export default Home;
