import React, { useEffect, useState } from "react";
import { Button, Card, CardFooter, Col, Container, Row } from "react-bootstrap";
import { CartDashFill, CashCoin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const NewProducts = () => {
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/products/latest")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setNewProduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Container fluid>
      <Row className="new-products">
        <Col md={12} className="text-left text-center">
          <h3 style={{ margin: "20px" }}>New Products</h3>
        </Col>
        {/* <Col md={6} className=" d-flex justify-content-end">
          <Row>
            <Col>
              <h5>Iphone</h5>
            </Col>
            <Col>
              <h5>SamSung</h5>
            </Col>
            <Col>
              <h5>Oppo</h5>
            </Col>
          </Row>
        </Col> */}
      </Row>
      <Row
        className=" new-products-item d-flex justify-content-between"
        style={{ margin: "10px" }}
      >
        {newProduct.map((product) => (
          <Col key={product._id} md={3} sm={6} xs={12} className="mb-4">
            <Card
              style={{ height: "100%", boxShadow: "5px 10px 10px 5px #C0C0C0" }}
            >
              <Link to={"/details/" + product._id} className="text-dark">
                <Card.Img variant="top" src={product.images[0]} />
                <Card.Body className="text-center">
                  <Card.Text>{product.brand.hangSanXuat}</Card.Text>
                  <Card.Title>{product.name}</Card.Title>
                </Card.Body>
              </Link>
              <Card.Footer className="text-center">
                <strong style={{ color: "orange" }}>
                  <CashCoin style={{ fontSize: "30px" }} />{" "}
                  {product.option[0]?.price}{" "}
                </strong>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewProducts;
