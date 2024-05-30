import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../style/checkout.css";
import { HouseHeartFill } from "react-bootstrap-icons";
import { BreadCrumb } from "primereact/breadcrumb";
const CheckOut = () => {
  const items = [
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          Check Out
        </span>
      ),
      url: "http://localhost:3000/checkout",
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
          borderRadius: "20px",
        }}
      >
        <BreadCrumb
          model={items}
          home={home}
          style={{
            marginTop: "15px",
            border: "none",
            backgroundColor: "transparent",
          }}
        />
      </Row>
      <Container className="bg-light checkout_item" >
        <Row className="mt-4 mb-4">
          <Col md={7} sm={6} xs={12}>
            <div class="billing-details pt-4">
              <div class="section-title">
                <h3 class="title pb-4 text-center">Billing address</h3>
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
              <div class="section-title text-center mt-2 pt-4">
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
                <Button
                  className="btn btn-danger"
                  style={{
                    borderRadius: "20px",
                    width: "70%",
                    marginTop: "80px",
                  }}
                >
                  PLACE ORDER
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CheckOut;
