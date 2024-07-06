import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button, Col, Row } from "react-bootstrap";
import { Trash, WalletFill, X } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Cart = (props) => {
  const { visible, setVisible } = props;
  const [listCart, setListCart] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate(); // Use the useNavigate hook
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9999/cart/${user._id}`)
      .then((res) => {
        const fetchedCart = res.data;
        const mergedCart = [];

        fetchedCart.forEach((item) => {
          const existingItemIndex = mergedCart.findIndex(
            (cartItem) =>
              cartItem.productId._id === item.productId._id &&
              cartItem.version === item.version &&
              cartItem.color === item.color
          );

          if (existingItemIndex > -1) {
            mergedCart[existingItemIndex].quantity += item.quantity;
          } else {
            mergedCart.push(item);
          }
        });

        setListCart(mergedCart);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [user._id]);

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete" + index + "?")) {
      axios
        .delete("http://localhost:9999/cart/" + index)
        .then(() => {
          toast.success("Cart updated successfully");
          setListCart(listCart.filter((t) => t._id !== index));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...listCart];
    updatedCart[index].quantity = newQuantity;
    setListCart(updatedCart);
  };

  const calculateTotal = () => {
    let total = 0;
    listCart.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const onHide = () => {
    setVisible(false);
  };

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      toast.warning("Please select a product");
    } else {
      const buy =
        selectedItems.length > 0
          ? listCart.filter((i) => selectedItems.includes(i._id))
          : listCart;
      // Use navigate to pass data via state
      navigate("/checkout", { state: { listCart: buy } });
      setVisible(false);
    }
  };
  const handleSelectedAll = () => {
    setSelectedAll(!selectedAll);
    setSelectedItems(selectedAll ? [] : listCart.map((item) => item._id));
  };
  const handleSelectedItems = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const dialogFooter = (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", justifyContent: "start" }}>
        <h5>Total: {formatCurrency(calculateTotal()) + " VND"}</h5>
      </div>
      <Button className="btn btn-success" onClick={handleCheckout}>
        <WalletFill
          style={{ fontSize: "22px", color: "white", marginRight: "7px" }}
        />
        Check Out
      </Button>
      <Button onClick={onHide} className="btn btn-danger">
        <X style={{ fontSize: "22px" }} />
        Close
      </Button>
    </div>
  );

  return (
    <div>
      <Dialog
        visible={visible}
        onHide={onHide}
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
                        <th>
                          <input
                            type="checkbox"
                            checked={selectedAll}
                            onChange={handleSelectedAll}
                          />
                        </th>
                        <th style={{ width: "15%" }}>Image</th>
                        <th style={{ width: "25%" }}>Product</th>
                        <th style={{ width: "20%" }}>Price</th>
                        <th style={{ width: "20%" }}>Version</th>
                        <th style={{ width: "20%" }}>Color</th>
                        <th style={{ width: "15%" }}>Quantity</th>
                        <th style={{ width: "25%" }}>Total</th>
                        <th style={{ width: "25%" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listCart.map((item, index) => (
                        <tr key={item._id}>
                          <td>
                            <input
                              type="checkbox"
                              checked={selectedItems.includes(item._id)}
                              onChange={() => handleSelectedItems(item._id)}
                            />
                          </td>
                          <td style={{ display: "flex", textAlign: "center" }}>
                            <img
                              src={item.productId.images[0]}
                              alt="image"
                              style={{
                                width: "100px",
                                height: "auto",
                                verticalAlign: "middle",
                              }}
                            />
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {item.productId.name}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {formatCurrency(item.price) + " VND"}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {item.version}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {item.color}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <input
                              type="number"
                              min="1"
                              style={{ width: "50px" }}
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(index, parseInt(e.target.value))
                              }
                            />
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {formatCurrency(item.quantity * item.price) +
                              " VND"}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <Trash
                              style={{
                                color: "red",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              onClick={() => handleDelete(item._id)}
                            />
                          </td>
                        </tr>
                      ))}
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
