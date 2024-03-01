import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartDashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [listproduct, setListProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/sanpham")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          setListProduct(data);
        } else {
          setListProduct([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setListProduct([]);
      });
  }, []);

  return (
    <Container>
      <Row className="d-flex justify-content-between mt-4 mb-4">
        {listproduct.map((product) => (
          <Col key={product.id} md={3} sm={6} xs={12} className="mb-4">
            <Card style={{ height: "100%"}}>
              <Link to={"/details/" +product.id} className="text-dark">
                <Card.Img variant="top" src={product.hinhAnh[0]?.itemImageSrc} />
                <Card.Body className="text-center">
                  <Card.Text>{product.hangSanXuat}</Card.Text>
                  <Card.Title>{product.model}</Card.Title>
                  <Card.Title>{product.luaChon[0]?.gia}</Card.Title>
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
        ))}
      </Row>
    </Container>
  );
};

export default ListProduct;
