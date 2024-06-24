import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import "../style/checkout.css";
import { HouseHeartFill } from "react-bootstrap-icons";
import { BreadCrumb } from "primereact/breadcrumb";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const CheckOut = () => {
  const location = useLocation();
  const { listCart } = location.state || { listCart: [] };
  const user = JSON.parse(localStorage.getItem("user"));
  const [paymentMethod, setPaymentMethod] = useState("0");
  const nav = useNavigate();
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

  const calculateTotal = () => {
    let total = 0;
    listCart.forEach((p) => {
      total += p.price * p.quantity;
    });
    return total;
  };

  // const formatCurrency = (value) => {
  //   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };

  const handlePlaceOrder = async () => {
    const orderData = {
      paymentMethod: paymentMethod === "COD" ? "COD" : paymentMethod,
      listCart: listCart,
      user: user,
    };
    axios
      .post("http://localhost:9999/payment", orderData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.message) toast.success(data.message);
        nav("/");
        console.log(calculateTotal());
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
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
          <Col md={5} sm={6} xs={12}>
            <div className="billing-details pt-4">
              <div className="section-title">
                <h3 className="title pb-4 text-center">Billing address</h3>
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="text"
                  name="full-name"
                  placeholder="Full Name"
                  value={user.full_name}
                />
              </div>

              <div className="form-group">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="text"
                  name="address"
                  value={user.address}
                  placeholder="Address"
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  type="tel"
                  name="tel"
                  placeholder="Telephone"
                  value={user.phone}
                />
              </div>
              <div className="form-group">
                <label>Payment method</label>
                <select
                  className="input payment_method w-100"
                  style={{ height: "35px" }}
                  name="payment_method"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="0">Choose payment method</option>
                  <option value="COD">Ship Cod</option>
                  <option value="zalopay">Pay with zalopay</option>
                </select>
              </div>
            </div>
          </Col>
          <Col md={7} sm={6} xs={12}>
            <div className="text-center pb-4">
              <h3 className="title">Your Order</h3>
            </div>
            <Row className="manager-order text-center">
              <Col md={12}>
                <Table>
                  <thead>
                    <tr className="text-center">
                      <th>PRODUCT NAME </th>
                      <th>Price</th>
                      <th>Version</th>
                      <th>Color</th>
                      <th>QUANTITY</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    {listCart.map((item) => (
                      <tr key={item._id}>
                        <td>{item.productId.name}</td>
                        {/* <td>{formatCurrency(item.price) + " VND"}</td> */}
                        <td>{item.price + " VND"}</td>
                        <td>{item.version}</td>
                        <td>{item.color}</td>
                        <td>{item.quantity}</td>
                        {/* <td>
                          {formatCurrency(item.quantity * item.price) + " VND"}
                        </td> */}
                        <td>{item.quantity * item.price + " VND"}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Col md={12} className="text-center  mt-auto">
                  <h5>Total: {calculateTotal() + " VND"}</h5>
                  {/* <h5>Total: {formatCurrency(calculateTotal()) + " VND"}</h5> */}

                  {paymentMethod !== "0" && (
                    <Button
                      onClick={handlePlaceOrder}
                      className="btn btn-danger"
                      style={{
                        borderRadius: "20px",
                        width: "50%",
                        marginTop: "20px",
                      }}
                    >
                      {paymentMethod === "zalopay"
                        ? "Pay With ZaloPay"
                        : "Place order"}
                    </Button>
                  )}
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CheckOut;
