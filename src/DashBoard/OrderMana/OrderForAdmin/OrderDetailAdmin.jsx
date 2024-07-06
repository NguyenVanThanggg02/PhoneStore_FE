import { Dialog } from "primereact/dialog";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

const OrderDetailAdmin = (props) => {
  const { visible, setVisible, order } = props;
  const onHide = () => {
    setVisible(false);
  };
  const calculateTotal = () => {
    let total = 0;
    order.items.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };
  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    order.items.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  function formatCurrency(number) {
    if (typeof number === "number") {
      return number.toLocaleString("en-US", {
        currency: "VND",
      });
    }
  }

  const dialogFooter = (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", justifyContent: "start" }}>
        <h5>Total:{calculateTotal()} </h5>
      </div>

      <Button onClick={onHide} className="btn btn-danger">
        <X style={{ fontSize: "22px" }} />
        Close
      </Button>
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        footer={dialogFooter}
        className="bg-light"
        style={{ width: "70vw" }}
        modal
        header={<div className="custom-dialog-header">Order Details</div>}
      >
        <div className="bg-light p-1" style={{ margin: "25px" }}>
          <h4 className="text-center"> Customer Infomation</h4>
          <div style={{ margin: "40px" }}>
            <Row>
              <Col md={6}>
                <div className="form-group w-full">
                  <label className="label">
                    <h6>Customer Name</h6>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ height: "50px" }}
                    value={order.userId.full_name}
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group w-full">
                  <label className="label">
                    <h6>Phone Number</h6>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    style={{ height: "50px" }}
                    value={order.userId.phone}
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                {" "}
                <div className="form-group w-full">
                  <label className="label">
                    <h6>Address</h6>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ height: "50px" }}
                    value={order.userId.address}
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group w-full">
                  <label className="label">
                    <h6>Total Orders Products</h6>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    style={{ height: "50px" }}
                    required
                    value={calculateTotalQuantity()}
                  />
                </div>
              </Col>
              <Col md={12}>
                {order.statu === "Cancel" && (
                  <div className="form-group w-full">
                    <label className="label">
                      <h6>Reason cancel</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                )}
              </Col>
            </Row>
          </div>
        </div>
        <div className="bg-light p-1" style={{ margin: "25px" }}>
          <div style={{ margin: "40px" }}>
            <form id="addProductForm">
              <Row>
                <Col className="text-center ">
                  <div className="table-responsive">
                    <table
                      className="table table-condensed"
                      style={{ height: "100px" }}
                    >
                      <thead>
                        <tr>
                          <th>PRODUCT NAME </th>
                          <th>Price</th>
                          <th>Version</th>
                          <th>Color</th>
                          <th>QUANTITY</th>
                          <th>TOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.items.map((o) => (
                          <tr key={o.productId._id}>
                            <td>{o.productId.name}</td>
                            <td>{formatCurrency(o.price)}</td>
                            <td>{o.version}</td>
                            <td>{o.color}</td>
                            <td>{o.quantity}</td>
                            <td>{formatCurrency(o.quantity * o.price)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default OrderDetailAdmin;
