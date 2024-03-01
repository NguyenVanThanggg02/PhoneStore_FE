import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const CheckOut = () => {
  return (
    <Container>
      <Row className="mt-4">
        <h3>CHECKOUT</h3>
      </Row>
      <Row className="mt-4 mb-4">
        <Col md={7} sm={6} xs={12}>
          <div class="billing-details">
            <div class="section-title">
              <h3 class="title">Billing address</h3>
            </div>
            <div class="form-group">
              <input
                class="input"
                type="text"
                name="full-name"
                placeholder="Full Name"
              />
            </div>

            <div class="form-group">
              <input
                class="input"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <input
                class="input"
                type="text"
                name="address"
                placeholder="Address"
              />
            </div>
            <div class="form-group">
              <input
                class="input"
                type="tel"
                name="tel"
                placeholder="Telephone"
              />
            </div>
          </div>
        </Col>
        <Col md={5} sm={6} xs={12}>
          <div className="manager-order ">
            <div class="section-title text-center mt-2">
              <h3 class="title">Your Order</h3>
            </div>
            <div class="order-summary mb-3">
              <div class="d-flex justify-content-between">
                <div>
                  <strong>PRODUCT</strong>
                </div>
                <div>
                  <strong>TOTAL</strong>
                </div>
              </div>
              <div class="order-products">
                <div class="order-col">
                  <div>1x Product Name Goes Here</div>
                  <div>$980.00</div>
                </div>
                <div class="order-col">
                  <div>2x Product Name Goes Here</div>
                  <div>$980.00</div>
                </div>
              </div>
              <div class="order-col">
                <div>Shiping</div>
                <div>
                  <strong>FREE</strong>
                </div>
              </div>
              <div class="order-col">
                <div>
                  <strong>TOTAL</strong>
                </div>
                <div>
                  <strong class="order-total">$2940.00</strong>
                </div>
              </div>
            </div>
            <div className="text-center mb-3">
              <Button className="btn btn-danger" style={{borderRadius:'20px', width:'70%'}}>PLACE ORDER</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOut;
