import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartDashFill, House, HouseHeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";

const ListProduct = () => {
  const [listproduct, setListProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/products")
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

  const items = [
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          Danh sách sản phẩm
        </span>
      ),
      url: "http://localhost:3000/listproduct",
    },
  ];
  const home = {
    icon: (
      <HouseHeartFill
        style={{
          fontSize: "30px",
          marginLeft: "10px",
          marginRight: "-80px",
          color: "gray",
        }}
      />
    ),
    url: "http://localhost:3000",
  };

  return (
    <Container fluid>
      <Row
        className="mt-3"
        style={{
          border: "solid #CCC 1px",
          margin: "20px",
          boxShadow: "5px 10px 10px 5px #C0C0C0",
          borderRadius:'20px'
        }}
      >
        <BreadCrumb model={items} home={home} style={{ marginTop: "15px" }} />
      </Row>
      <Row
        className="d-flex justify-content-between mt-4 mb-4"
        style={{ margin: "5px" }}
      >
        {listproduct.map((product) => (
          <Col key={product._id} md={3} sm={6} xs={12} className="mb-4">
            <Card
              style={{ height: "100%", boxShadow: "5px 10px 10px 5px #C0C0C0" }}
            >
              <Link to={"/details/" + product._id} className="text-dark">
                <Card.Img variant="top" src={product.images[0]} />
                <Card.Body className="text-center">
                  <Card.Text>{product.brand.hangSanXuat}</Card.Text>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Title>{product.option[0]?.price}</Card.Title>
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
