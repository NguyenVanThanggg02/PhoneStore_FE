import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import UserManagement from "./UserManagement";
import OrderManagement from "../OrderMana/OrderManagement";
import TopSeller from "../Product/TopSeller";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import "../../style/dashboard.css";
import AdminDashBoard from "./AdminDashBoard";
import { CardChecklist, Circle, GearFill, HouseHeartFill, ListStars, PersonFillGear, PersonWorkspace } from "react-bootstrap-icons";
import { BreadCrumb } from "primereact/breadcrumb";
import ProductManagement from "../Product/ProductManagement";
import Tabs from "react-bootstrap/Tabs";
import logo from "../../../src/assets/images/logo.jpg";

const DashBoard = () => {
  const items = [
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          𝓣𝓱ố𝓷𝓰 𝓴ê
        </span>
      ),
      url: "http://localhost:3000/dashboard",
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
          boxShadow: "5px 5px 10px 5px #C0C0C0",
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
      <Row className="dashboard" style={{ margin: "25px" }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2} className="item" style={{marginLeft:'15px'}} >
              <Row style={{ display: "flex", justifyContent: "center", marginBottom:'50px' }}>
                <img
                  src={logo}
                  style={{ width: "130px", borderRadius: "50%", height: "93px" }}
                />
              </Row>
              {/* <Row style={{ display: "flex", justifyContent: "center" }}>
                <h4>Thắng Apple</h4>
              </Row> */}
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first"><PersonWorkspace style={{fontSize:'35px', marginRight:'10px'}}/>AdminDashBoard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second"> <PersonFillGear style={{fontSize:'35px', marginRight:'10px'}}/>UserManagement</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="three"><CardChecklist style={{fontSize:'35px', marginRight:'10px'}}/>OrderManagement</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="four"><ListStars style={{fontSize:'35px', marginRight:'10px'}}/>TopSeller</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="five"><GearFill style={{fontSize:'25px', marginRight:'10px'}}/>ProductManagement</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>
            </Col>
            <Col sm={9} style={{width:"100%"}} className="item-content">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <AdminDashBoard />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <UserManagement />
                </Tab.Pane>
                <Tab.Pane eventKey="three">
                  <OrderManagement />
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <TopSeller />
                </Tab.Pane>
                <Tab.Pane eventKey="five">
                  <ProductManagement />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    </Container>
  );
};

export default DashBoard;
