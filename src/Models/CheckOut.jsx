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
      <Container className="bg-light checkout_item">
        <Row className="mt-4 mb-4">
          <Col md={6} sm={6} xs={12}>
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
          <Col md={6} sm={6} xs={12}>
            <div className="text-center pb-4">
              <h3 className="title">Your Order</h3>
            </div>
            <Row className="manager-order text-center">
              <Col md={5}>
                <div>
                  <strong>PRODUCT NAME</strong>
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <strong>QUANTITY</strong>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <strong>TOTAL</strong>
                </div>
              </Col>
              <Col md={12} className="text-center  mt-auto">
                <Button
                  className="btn btn-danger"
                  style={{
                    borderRadius: "20px",
                    width: "50%",
                    marginTop: "80px",
                  }}
                >
                  PLACE ORDER
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CheckOut;
