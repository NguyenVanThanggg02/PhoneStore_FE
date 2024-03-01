import React from "react";
import { Button, Card, CardFooter, Col, Container, Row } from "react-bootstrap";
import { CartDashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const NewProducts = () => {
  return (
    <Container>
      <Row className="new-products">
        <Col md={6} className="text-left">
          <h3>New Products</h3>
        </Col>
        <Col md={6} className=" d-flex justify-content-end">
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
        </Col>
      </Row>
      <Row className=" new-products-item d-flex justify-content-between">
        <Col md={3} sm={6} xs={12}>
          <Card>
            <Link to={"/details"} className="text-dark">
              <Card.Img
                variant="top"
                src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
              />

              <Card.Body className="text-center">
                <Card.Text>Category</Card.Text>
                <Card.Title>Card Title</Card.Title>
                <Card.Title>$100</Card.Title>
              </Card.Body>
            </Link>
            <Card.Footer className="text-center bg-white">
              <Button className="btn btn-danger">
                <CartDashFill style={{ color: "white", fontSize: "30px" }} />
                ADD TO CART
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card>
            <Link to={"/details"} className="text-dark">
              <Card.Img
                variant="top"
                src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
              />

              <Card.Body className="text-center">
                <Card.Text>Category</Card.Text>
                <Card.Title>Card Title</Card.Title>
                <Card.Title>$100</Card.Title>
              </Card.Body>
            </Link>
            <Card.Footer className="text-center bg-white">

              <Button className="btn btn-danger">
                <CartDashFill style={{ color: "white", fontSize: "30px" }} />
                ADD TO CART
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card>
            <Link to={"/details"} className="text-dark">
              <Card.Img
                variant="top"
                src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
              />

              <Card.Body className="text-center">
                <Card.Text>Category</Card.Text>
                <Card.Title>Card Title</Card.Title>
                <Card.Title>$100</Card.Title>
              </Card.Body>
            </Link>
            <Card.Footer className="text-center bg-white">

              <Button className="btn btn-danger">
                <CartDashFill style={{ color: "white", fontSize: "30px" }} />
                ADD TO CART
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card>
            <Link to={"/details"} className="text-dark">
              <Card.Img
                variant="top"
                src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
              />

              <Card.Body className="text-center">
                <Card.Text>Category</Card.Text>
                <Card.Title>Card Title</Card.Title>
                <Card.Title>$100</Card.Title>
              </Card.Body>
            </Link>
            <Card.Footer className="text-center bg-white">

              <Button className="btn btn-danger">
                <CartDashFill style={{ color: "white", fontSize: "30px" }} />
                ADD TO CART
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewProducts;
