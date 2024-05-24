import { Dialog } from "primereact/dialog";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  PlusSquareFill,
  Trash,
  Trash3Fill,
  WalletFill,
  X,
} from "react-bootstrap-icons";

const Cart = (props) => {
  const { visible, setVisible } = props;

  const onHide = () => {
    setVisible(false);
  };

  const dialogFooter = (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", justifyContent: "start" }}>
        <h4>Total: 9.000.000</h4>
      </div>

      <Button onClick={onHide} className="btn btn-success">
        <WalletFill
          style={{ fontSize: "22px", color: "white", marginRight: "7px" }}
        />
        Check Out
      </Button>
    </div>
  );
  return (
    <div>
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        footer={dialogFooter}
        className="bg-light"
        style={{ width: "70vw" }}
        modal
        header={<div className="custom-dialog-header">Cart Shop</div>}
      >
        <div className="bg-light p-1" style={{ margin: "25px" }}>
          <div style={{ margin: "40px" }}>
            <Row>
              <Col className="text-center ">
                <div className="table-responsive">
                  <table className="table table-condensed">
                    <thead>
                      <tr>
                        <th style={{ width: "15%" }}>Image</th>
                        <th style={{ width: "25%" }}>Product</th>
                        <th style={{ width: "20%" }}>Price</th>
                        <th style={{ width: "15%" }}>Quantity</th>
                        <th style={{ width: "25%" }}>Total</th>
                        <th style={{ width: "25%" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ display: "flex", textAlign: "center" }}>
                          <img
                            src="https://cdn.hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-iphone-12-mini-2.png"
                            alt="image"
                            style={{ width: "100px", height: "auto" }}
                          />
                        </td>
                        <td>Iphone 12</td>
                        <td>9.000.000</td>
                        <td>
                          <input type="number" min="1" />
                        </td>
                        <td>9.000.000</td>
                        <td>
                          <Trash
                            style={{
                              color: "red",
                              fontSize: "25px",
                              cursor: "pointer",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://onewaymobile.vn/images/products/2022/07/08/original/iphone-12-promax-oneway_1657260526.png"
                            alt="image"
                            style={{ width: "100px", height: "auto" }}
                          />
                        </td>
                        <td>Iphone 12 Pro Max</td>
                        <td>17.000.000</td>
                        <td>
                          <input type="number" min="1" />
                        </td>
                        <td>17.000.000</td>
                        <td>
                          <Trash
                            style={{
                              color: "red",
                              fontSize: "25px",
                              cursor: "pointer",
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Cart;
