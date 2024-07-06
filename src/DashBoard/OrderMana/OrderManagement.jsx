import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import AllOrder from "./OrderForAdmin/AllOrder";
import Pending from "./OrderForAdmin/Pending";
import Processing from "./OrderForAdmin/Processing";

const OrderManagement = () => {
  return (
    <Container fluid>
      <Tabs defaultActiveKey="allorder" id="uncontrolled-tab-example">
        <Tab eventKey="allorder" title="All Order">
          <AllOrder/>
        </Tab>
        <Tab eventKey="pending" title="Pending">
          <Pending status="Pending"/>
        </Tab>
        <Tab eventKey="processing" title="Processing">
          <Processing status="Processing"/>
        </Tab>
        <Tab eventKey="completed" title="Completed">
          <Processing status="Completed"/>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default OrderManagement;
