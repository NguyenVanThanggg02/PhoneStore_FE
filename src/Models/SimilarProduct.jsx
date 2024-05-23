import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../style/similarproduct.css";

const SimilarProduct = ({ product }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const { pid } = useParams();

  useEffect(() => {
    if (product.brand) {
      axios
        .get(`http://localhost:9999/products/brand/${product.brand?._id}`)

        .then((response) => {
          const filteredSimilarProducts = response.data
            .filter((p) => p._id !== product._id)
            .slice(0, 4);
          setSimilarProducts(filteredSimilarProducts);
          console.log(filteredSimilarProducts);
        })
        .catch((error) => {
          console.error("Error fetching similar products:", error);
        });
    }
  }, [product]);

  const handleSimilarProductClick = () => {
    window.location.reload(); 
  };

  console.log(product.brand);
  return (
    <Container
      className="similarproduct  mb-4"
      fluid
      style={{
        border: "solid #CCC 1px",
        margin: "35px",
        boxShadow: "5px 10px 10px 5px #C0C0C0",
        borderRadius: "20px",
      }}
    >
      <Row style={{ display:'flex', justifyContent:'center'}}>
        <h3 style={{ margin: "20px", display:'flex', justifyContent:'center' }}>Sản phẩm Tương Tự</h3>
      </Row>
      <Row>
        {similarProducts.slice(0, 4).map((s) => (
          <Col md={3} style={{ textAlign: "center" }}>
            <div
              className="m-2 border-round-md"
              onClick={handleSimilarProductClick}
            >
              <Link to={"/details/" + s._id} className="text-dark">
                <Image
                  className="border-round-md "
                  src={s.images[0]}
                  alt={s.name}
                  width="250"
                  preview
                />

                <div className="text-center">
                  <div className="font-bold text-base">
                    <h6>{s.name}</h6>
                  </div>
                  <h6>{s.option[0]?.price}$</h6>
                  <del
                    class="product-old-price"
                    style={{ color: "gray", fontSize: "smaller" }}
                  >
                    $990.00
                  </del>
                </div>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SimilarProduct;
