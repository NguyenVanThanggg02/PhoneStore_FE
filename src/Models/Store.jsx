import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartDashFill } from "react-bootstrap-icons";

const Store = () => {
  return (
    <Container>
      <Row className="mt-4 mb-4">
        <Col md={3} sm={6} xs={6}>
          <div>
            <h3>CATEGORIES</h3>
            <div class="checkbox-filter">
              <div class="input-checkbox">
                <input type="checkbox" id="category-1" />
                <label for="category-1">
                  <span></span>
                  Laptops
                  <small>(120)</small>
                </label>
              </div>

              <div class="input-checkbox">
                <input type="checkbox" id="category-2" />
                <label for="category-2">
                  <span></span>
                  Smartphones
                  <small>(740)</small>
                </label>
              </div>

              <div class="input-checkbox">
                <input type="checkbox" id="category-3" />
                <label for="category-3">
                  <span></span>
                  Cameras
                  <small>(1450)</small>
                </label>
              </div>

              <div class="input-checkbox">
                <input type="checkbox" id="category-4" />
                <label for="category-4">
                  <span></span>
                  Accessories
                  <small>(578)</small>
                </label>
              </div>

              <div class="input-checkbox">
                <input type="checkbox" id="category-5" />
                <label for="category-5">
                  <span></span>
                  Laptops
                  <small>(120)</small>
                </label>
              </div>
            </div>
          </div>

          <div class="aside">
            <h3 class="aside-title">Price</h3>
            <div class="price-filter">
              <div class="input-number">
                <input id="price-min" type="number" />
                {/* <span class="qty-controls">
                  <span class="qty-up">+</span>
                  <span class="qty-down">-</span>
                </span> */}
              </div>
              <span>- </span>
              <div class="input-number">
                <input id="price-max" type="number" />
                {/* <span class="qty-controls">
                  <span class="qty-up">+</span>
                  <span class="qty-down">-</span>
                </span> */}
              </div>
            </div>
          </div>

          <div class="aside">
            <h3 class="aside-title">Brand</h3>
            <div class="checkbox-filter">
              <div class="input-checkbox">
                <input type="checkbox" id="brand-1" />
                <label for="brand-1">
                  <span></span>
                  SAMSUNG
                  <small>(578)</small>
                </label>
              </div>
              <div class="input-checkbox">
                <input type="checkbox" id="brand-2" />
                <label for="brand-2">
                  <span></span>
                  LG
                  <small>(125)</small>
                </label>
              </div>
              <div class="input-checkbox">
                <input type="checkbox" id="brand-3" />
                <label for="brand-3">
                  <span></span>
                  SONY
                  <small>(755)</small>
                </label>
              </div>
              
              
             
            </div>
          </div>
        </Col>
        <Col md={9} sm={6} xs={6}>
          <div class="store-filter clearfix">
            <div class="store-sort">
              <label>
                Sort By:
                <Button className="btn btn-danger">Mới Nhất</Button>
                <Button>Bán Chạy Nhất</Button>
              </label>
            </div>
          </div>
          <Row className="mt-3">
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
                />
                <Card.Body className="text-center">
                  <Card.Text>Category</Card.Text>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Title>$100</Card.Title>

                  <Button className="btn btn-danger">
                    <CartDashFill
                      style={{ color: "white", fontSize: "30px" }}
                    />
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
                />
                <Card.Body className="text-center">
                  <Card.Text>Category</Card.Text>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Title>$100</Card.Title>

                  <Button className="btn btn-danger">
                    <CartDashFill
                      style={{ color: "white", fontSize: "30px" }}
                    />
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
                />
                <Card.Body className="text-center">
                  <Card.Text>Category</Card.Text>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Title>$100</Card.Title>

                  <Button className="btn btn-danger">
                    <CartDashFill
                      style={{ color: "white", fontSize: "30px" }}
                    />
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
                />
                <Card.Body className="text-center">
                  <Card.Text>Category</Card.Text>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Title>$100</Card.Title>

                  <Button className="btn btn-danger">
                    <CartDashFill
                      style={{ color: "white", fontSize: "30px" }}
                    />
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
                />
                <Card.Body className="text-center">
                  <Card.Text>Category</Card.Text>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Title>$100</Card.Title>

                  <Button className="btn btn-danger">
                    <CartDashFill
                      style={{ color: "white", fontSize: "30px" }}
                    />
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.webp"
                />
                <Card.Body className="text-center">
                  <Card.Text>Category</Card.Text>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Title>$100</Card.Title>

                  <Button className="btn btn-danger">
                    <CartDashFill
                      style={{ color: "white", fontSize: "30px" }}
                    />
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Store;
