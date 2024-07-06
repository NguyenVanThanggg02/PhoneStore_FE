import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartDashFill, CashCoin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const TopSelling = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/payment/top-products")
      .then((response) => setBestSeller(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container fluid className="mb-4"> 
      <Row className="new-products" >
      <Col md={12} className="text-left text-center">
          <h3 style={{ margin: "20px" }}>Top Selling</h3>
        </Col>
      </Row>
      <Row className=" new-products-item d-flex justify-content-between" style={{ margin: "10px" }}>
        {bestSeller.map((b) => (
          <Col md={3} sm={6} xs={12}>
            <Card style={{ height: "100%", boxShadow: "5px 10px 10px 5px #C0C0C0"}}>
              <Link to={"/details/" +b._id}  className="text-dark">
                <Card.Img
                  variant="top"
                  src={b.images[0]}
                />
                <Card.Body className="text-center">
                  <Card.Text>{b.brand.hangSanXuat}</Card.Text>
                  <Card.Title>{b.name}</Card.Title>
                </Card.Body>
              </Link>
              <Card.Footer className="text-center">
                <strong style={{ color: "orange" }}>
                  <CashCoin style={{ fontSize: "30px", marginRight:'10px' }} />
                  {b.option[0]?.price}
                </strong>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TopSelling;
