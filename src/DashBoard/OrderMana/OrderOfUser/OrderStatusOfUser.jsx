import React from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import AllOrderOfUser from "./AllOrderOfUser";
import { HouseHeartFill } from "react-bootstrap-icons";
import { BreadCrumb } from "primereact/breadcrumb";
import PendingUser from "./PendingUser";
import ProcessingUser from "./ProcessingUser";
import CancelUser from "./CancelUser";
import CompletedUser from "./CompletedUser";

const OrderStatusOfUser = () => {
  const items = [
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          My Orders
        </span>
      ),
      url: "http://localhost:3000/listproduct",
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
      <Container>
        <Tabs defaultActiveKey="allorder" id="uncontrolled-tab-example">
          <Tab eventKey="allorder" title="All Order">
            <AllOrderOfUser />
          </Tab>
          <Tab eventKey="pending" title="Pending">
            <PendingUser status="Pending" />
          </Tab>
          <Tab eventKey="processing" title="Processing">
            <ProcessingUser status="Processing" />
          </Tab>
          <Tab eventKey="completed" title="Completed">
            <CompletedUser status="Completed" />
          </Tab>
          <Tab eventKey="cancel" title="Cancel">
            <CancelUser status="Cancel" />
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
};

export default OrderStatusOfUser;
