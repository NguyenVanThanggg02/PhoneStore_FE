import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <Container
      className="modal show"
      style={{ display: "block", position: "initial", paddingTop:'113px' }}
    >
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
                  <Form.Label>Account</Form.Label>
                  <Form.Control disabled value="thangnvhe1614" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupFullName">
                  <Form.Label>
                    Fullname
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control type="text" required value="Nguyễn Văn Thắng" />
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>
                    Email
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control type="email" required value="thang@gmail.com" />
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" value="012345678" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupCountry">
                  <Form.Label>
                    Date of Birth
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control type="date" required value="2002-12-10" />
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                  <Form.Label>
                    Gender
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select class="sel" required>
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupCountry">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" value="Hà Nội" />
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
