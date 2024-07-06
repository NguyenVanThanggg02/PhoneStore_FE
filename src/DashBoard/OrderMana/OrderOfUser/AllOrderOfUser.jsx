import axios from "axios";
import { BreadCrumb } from "primereact/breadcrumb";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Eye, HouseHeartFill } from "react-bootstrap-icons";
import OrderDetail from "./OrderDetail";
const AllOrderOfUser = () => {
  const [listOrder, setListOrder] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:9999/payment/user/${user._id}`)
      .then((response) => {
        setListOrder(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
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
    <Container>
      <Row>
        <Col md={10} className="text-center">
          <Table>
            <thead>
              <th>Order Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Payment Method</th>
              <th>Operation</th>
            </thead>
            <tbody>
              {listOrder.map((o) => (
                <tr key={o._id}>
                  <td>{formatDate(o.createdAt)}</td>
                  <td>{o.status}</td>
                  <td>{formatCurrency(o.totalAmount) + " đ"}</td>
                  <td>{o.paymentMethod}</td>
                  <td>
                    <Eye
                      onClick={() => handleOrderDetail(o._id)}
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        fontSize: "25px",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      {visible && (
        <OrderDetail
          visible={visible}
          setVisible={setVisible}
          order={selectedOrder}
        />
      )}
    </Container>
  );
};

export default AllOrderOfUser;
