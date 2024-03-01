import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const SimilarProduct = () => {
  return (
    <Container className="similarproduct  mb-4">
      <Row>
        <h3>Sản phẩm Tương Tự</h3>
      </Row>
      <Row>
        <Col md={3}>
          <div className="m-2 border-round-md">
            <Image
              className="border-round-md "
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818"
              alt="Image"
              width="250"
              preview
            />
            <div className="text-center">
              <div className="font-bold text-base">Iphone 15 Pro</div>
              $980.00
              <del
                class="product-old-price"
                style={{ color: "gray", fontSize: "smaller" }}
              >
                $990.00
              </del>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="m-2 border-round-md">
            <Image
              className="border-round-md "
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818"
              alt="Image"
              width="250"
              preview
            />
            <div className="text-center">
              <div className="font-bold text-base">Iphone 15 Pro</div>
              $980.00
              <del
                class="product-old-price"
                style={{ color: "gray", fontSize: "smaller" }}
              >
                $990.00
              </del>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="m-2 border-round-md">
            <Image
              className="border-round-md "
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818"
              alt="Image"
              width="250"
              preview
            />
            <div className="text-center">
              <div className="font-bold text-base">Iphone 15 Pro</div>
              $980.00
              <del
                class="product-old-price"
                style={{ color: "gray", fontSize: "smaller" }}
              >
                $990.00
              </del>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="m-2 border-round-md">
            <Image
              className="border-round-md "
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818"
              alt="Image"
              width="250"
              preview
            />
            <div className="text-center">
              <div className="font-bold text-base">Iphone 15 Pro</div>
              $980.00
              <del
                class="product-old-price"
                style={{ color: "gray", fontSize: "smaller" }}
              >
                $990.00
              </del>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SimilarProduct;
