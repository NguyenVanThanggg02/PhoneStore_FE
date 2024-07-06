import { Dialog } from "primereact/dialog";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

const OrderDetail = (props) => {
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
        <h5>Total: {formatCurrency(calculateTotal()) + " đ"}</h5>
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
                                <td>{formatCurrency(o.price) + " đ"}</td>
                                <td>{o.version}</td>
                                <td>{o.color}</td>
                                <td>{o.quantity}</td>
                                <td>{formatCurrency((o.price * o.quantity)) + " đ"}</td>
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

export default OrderDetail;
