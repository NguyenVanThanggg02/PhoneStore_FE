import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopSelling from "./TopSelling";
import NewProducts from "./NewProducts";
import TopSellingCategory from "./TopSellingCategory";
import SliderBanner from "../components/SliderBanner";
import "../style/home.css";

const Home = () => {
  const [listproduct, setListProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/products") // Lấy tất cả các sản phẩm
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          // Lọc và chỉ lấy ra một sản phẩm của mỗi hãng sản xuất
          const uniqueProducts = getUniqueProducts(data, "hangSanXuat");
          setListProduct(uniqueProducts);
          console.log(data);
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
    <Container fluid className="p-0">
      <SliderBanner />

      <Row
        className="d-flex justify-content-between mt-4 mb-4"
        style={{ margin: "10px" }}
      >
        {listproduct.map((p) => (
          <Col key={p._id} md={4} sm={6} xs={12} className="mb-4">
            <Card style={{ height: "100%", borderRadius: "25px" }}>
              <Link
                to={"/details/" + p._id}
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
                  src={p.images[0]}
                  style={{ height: "80%", width: "80%" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{p.brand.hangSanXuat}</Card.Title>
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
