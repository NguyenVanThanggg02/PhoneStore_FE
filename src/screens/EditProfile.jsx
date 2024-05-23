import axios from "axios";
import { BreadCrumb } from "primereact/breadcrumb";
import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { HouseHeartFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProfile = () => {
  const [editProfile, setEditProfile] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const nav = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:9999/users/" + user.username).then((res) => {
      setEditProfile(res.data);
      console.log(res.data);
    });
  }, [user.username]);

  const handleUpdate = () => {
    axios
      .put("http://localhost:9999/users/" + user.username, {
        full_name: editProfile.full_name,
        email: editProfile.email,
        gender: editProfile.gender,
        birthday: editProfile.birthday,
        phone: editProfile.phone,
        address: editProfile.address,
      })
      .then((response) => {
        if (response.status === 200) {
          const updatedUser = { ...user, ...editProfile };
          localStorage.setItem("user", JSON.stringify(updatedUser));
          toast.success("Edit profile successfully");
          nav("/profile");
        } else {
          toast.error("Edit profile failed");
        }
      });
  };
  const items = [
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          Hồ Sơ
        </span>
      ),
      url: "http://localhost:3000/profile",
    },
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          Chỉnh sửa hồ sơ
        </span>
      ),
      url: "http://localhost:3000/profile/editprofile",
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
                  <Form.Control disabled value={1} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control disabled value={editProfile.username} />
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
                  <Form.Control
                    type="text"
                    required
                    value={editProfile.full_name}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        full_name: e.target.value,
                      })
                    }
                  />
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>
                    Email
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    required
                    value={editProfile.email}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        email: e.target.value,
                      })
                    }
                  />
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="phone"
                    value={editProfile.phone}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        phone: e.target.value,
                      })
                    }
                  />
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
                    value={formatDate(editProfile.birthday)}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        birthday: e.target.value,
                      })
                    }
                  />
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupGender">
                  <Form.Label>
                    Gender
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    required
                    value={editProfile.gender}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        gender: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Gender</option>

                    <option value="male">male</option>
                    <option value="female">female</option>
                  </Form.Select>
                  <p style={{ color: "red" }}></p>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupCountry">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    value={editProfile.address}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        address: e.target.value,
                      })
                    }
                  />
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
          <Button
            style={{ background: "green" }}
            variant="secondary"
            onClick={handleUpdate}
          >
            Update Profile
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
  );
};

export default EditProfile;
