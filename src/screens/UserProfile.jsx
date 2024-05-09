import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
import { HouseHeartFill } from "react-bootstrap-icons";

const UserProfile = () => {
  const [profile, setProfile] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const items = [
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          Hồ Sơ
        </span>
      ),
      url: "http://localhost:3000/profile",
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

  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Container
      fluid
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Row className="mt-3" style={{ border: "solid #CCC 1px", margin:"20px", boxShadow:'5px 10px 10px 5px #C0C0C0', borderRadius:'20px' }}>
        <BreadCrumb model={items} home={home}  style={{marginTop:'15px'}}/>
      </Row>
      <Modal.Dialog>
        <Modal.Header style={{ background: "#eee" }}>
          <Modal.Title>Profile Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupUsername">
                  <Form.Label>ID</Form.Label>
                  <Form.Control disabled value={1} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control disabled value={user.username} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupFullName">
                  <Form.Label>
                    Full Name
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control type="text" required value={user.full_name} />
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>
                    Email
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control type="email" required value={user.email} />
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" value={user.phone} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupCountry">
                  <Form.Label>
                    Date of Birth
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={formatDate(user.birthday)}
                  />
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>
                    Gender
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control type="text" required value={user.gender} />
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupCountry">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" value={user.address} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer
          style={{
            background: "#eee",
            justifyContent: "flex-start",
          }}
        >
          <Link to={"/profile/editprofile"}>
            <Button style={{ background: "green" }} variant="secondary">
              Edit Profile
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
  );
};

export default UserProfile;
