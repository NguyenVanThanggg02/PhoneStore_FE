import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopSelling from "./TopSelling";
import NewProducts from "./NewProducts";
import TopSellingCategory from "./TopSellingCategory";
import SliderBanner from "../components/SliderBanner";

const Home = () => {
  const [listproduct, setListProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/products") // Lấy tất cả các sản phẩm
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          // Lọc và chỉ lấy ra một sản phẩm của mỗi hãng sản xuất
          const uniqueProducts = getUniqueProducts(data, "brand");
          setListProduct(uniqueProducts);
        } else {
          setListProduct([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setListProduct([]);
      });
  }, []);

  // Hàm lọc danh sách sản phẩm và chỉ giữ lại một sản phẩm của mỗi hãng sản xuất
  const getUniqueProducts = (products, key) => {
    const uniqueProducts = [];
    const uniqueKeys = [];

    products.forEach((product) => {
      if (!uniqueKeys.includes(product[key])) {
        uniqueKeys.push(product[key]);
        uniqueProducts.push(product);
      }
    });

    return uniqueProducts;
  };

  return (
    <Container fluid>
      {/* <Row style={{marginTop:'20px'}}>
        <SliderBanner />
      </Row> */}

      <Row className="home" style={{ margin: "10px" }}>
        <Col md={8} sm={8} xs={8}>
          <ul className="link-item">
            <li>
              <h6>
                <Link className="text-dark link-item" to="/">
                  Home
                </Link>
              </h6>
            </li>
            <li className="link-item">
              <h6>
                <Link className="text-dark" to="/listproduct">
                  List Product
                </Link>
              </h6>
            </li>
          </ul>
        </Col>
      </Row>

      <Row
        className="d-flex justify-content-between mt-4 mb-4"
        style={{ margin: "10px" }}
      >
        {listproduct.map((product) => (
          <Col key={product._id} md={4} sm={6} xs={12} className="mb-4">
            <Card style={{ height: "100%", borderRadius: "25px" }}>
              <Link
                to={"/details/" + product._id}
                className="text-dark"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.images[0]}
                  style={{ height: "80%", width: "80%" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{product.brand.hangSanXuat}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
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
