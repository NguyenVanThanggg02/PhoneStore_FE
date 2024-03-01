import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditProfile = () => {
  return (
    <Container
      className="modal show"
      style={{ display: "block", position: "initial", paddingTop:'113px' }}
    >
      <Modal.Dialog>
        <Modal.Header style={{ background: "#eee" }}>
          <Modal.Title>Profile Setting</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupUsername">
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="text" disabled />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Account</Form.Label>
                  <Form.Control disabled />
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
                  <Form.Control type="text" required/>
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>
                    Email
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control type="email" required />
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupCountry">
                  <Form.Label>
                    Date of Birth
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control type="date" required />
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
                  <Form.Control type="text" />
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
          <Button style={{ background: "green" }} variant="secondary">
            Update Profile
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
  );
};

export default EditProfile;
