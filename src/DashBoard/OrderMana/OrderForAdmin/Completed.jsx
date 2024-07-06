import React, { useEffect, useState } from "react";
import OrderDetailAdmin from "./OrderDetailAdmin";
import { Eye } from "react-bootstrap-icons";
import { Col, Container, FormSelect, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const Completed = ({status}) => {
  const [listOrder, setlistOrder] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9999/payment/${status}`
        );
        setlistOrder(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [status]);

  const handleChangeOrderStatus = (e, orderId) => {
    e.preventDefault();
    const newStatus = e.target.value;
    axios
      .put("http://localhost:9999/payment/" + orderId, {
        status: newStatus,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Order status updated successfully");
          setlistOrder(
            listOrder.map((order) =>
              order._id === orderId ? { ...order, status: newStatus } : order
            )
          );
        } else {
          toast.error("Failed to update order status");
        }
      });
  };
  const formatDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const handleOrderDetail = (orderId) => {
    const order = listOrder.find((o) => o._id === orderId);
    setSelectedOrder(order);
    setVisible(true);
  };
  function formatCurrency(number) {
    if (typeof number === "number") {
      return number.toLocaleString("en-US", {
        currency: "VND",
      });
    }
  }
  return (
    <Container fluid>
      <Row style={{ marginLeft: "70px", marginTop: "30px", width: "100%" }}>
        <div>
          <Row className="ml-1 mb-4">
            <h3>Order Management</h3>
          </Row>
        </div>
        <Col md={12}>
          <Table className="text-center" striped bordered hover>
            <thead>
              <th>Order Date</th>
              <th>Customer </th>
              <th>Phone</th>
              <th>Address</th>
              <th>Status</th>
              <th>Total</th>
              <th>Payment Method</th>
              <th>Operation</th>
            </thead>
            <tbody className="text-center">
              {listOrder.map((o, index) => (
                <tr key={o._id}>
                  <td>{formatDate(o.createdAt)}</td>
                  <td>{o.userId.full_name}</td>
                  <td>{o.userId.phone}</td>
                  <td>{o.userId.address}</td>
                  <td>
                    <FormSelect
                      style={{
                        borderRadius: "30px",
                        width: "110px",
                        border: "none",
                        paddingLeft: "8px",
                      }}
                      value={o.status}
                      disabled={o.status === "Completed"}
                      onChange={(e) => {
                        if (
                          o.status === "Processing" &&
                          e.target.value === "Pending"
                        ) {
                          return;
                        }
                        handleChangeOrderStatus(e, o._id);
                      }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Completed">Completed</option>
                    </FormSelect>
                  </td>
                  <td>{formatCurrency(o.totalAmount) + " đ"}</td>
                  <td>{o.paymentMethod}</td>
                  <td>
                    <Eye
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        fontSize: "25px",
                      }}
                      onClick={() => handleOrderDetail(o._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      {visible && (
        <OrderDetailAdmin
          visible={visible}
          setVisible={setVisible}
          order={selectedOrder}
        />
      )}
    </Container>
  );
};
export default Completed;