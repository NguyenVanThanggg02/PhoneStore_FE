import axios from "axios";
import { BreadCrumb } from "primereact/breadcrumb";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { HouseHeartFill, Lock, Unlock } from "react-bootstrap-icons";
import { toast } from "react-toastify";

const ChangePassWord = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "70px",
    marginBottom: "70px",
  };

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleUpdate = () => {
    if (!oldPass || !newPass || !reNewPass) {
      alert("Please fill in all fields!");
      return;
    }
    if (newPass !== reNewPass) {
      alert("New passwords do not match!");
      return;
    }
    if (oldPass !== user.password) {
      alert("Old password is incorrect!");
      return;
    }

    axios
      .put(`http://localhost:9999/users/${user.username}`, {
        password: newPass,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Change password successfully!");
          setOldPass("");
          setNewPass("");
          setReNewPass("");
          const updatedUser = { ...user, password: newPass };
          localStorage.setItem("user", JSON.stringify(updatedUser));
        } else {
          toast.error("Change password failed!");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
        alert("Change password failed!");
      });
  };
  const items = [
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          Thay đổi mật khẩu
        </span>
      ),
      url: "http://localhost:3000/changepass",
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
      <Row className="mt-3" style={{ borderBottom: "solid gray 1px" }}>
        <BreadCrumb model={items} home={home} />
      </Row>
      <Row style={containerStyle}>
        <Col md={8}>
          <InputGroup className="mb-3">
            <Lock
              style={{
                fontSize: "25px",
                border: "solid #CCCC 1px",
                height: "38px",
                color: "#808080",
                backgroundColor: "#EEEEEE",
                width: "30px",
              }}
            />
            <FormControl
              placeholder="Old Password"
              aria-label="Old Password"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
              type="password"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Unlock
              style={{
                fontSize: "25px",
                border: "solid #CCCC 1px",
                height: "38px",
                color: "#808080",
                backgroundColor: "#EEEEEE",
                width: "30px",
              }}
            />
            <FormControl
              placeholder="New Password"
              aria-label="New Password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              type="password"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Unlock
              style={{
                fontSize: "25px",
                border: "solid #CCCC 1px",
                height: "38px",
                color: "#808080",
                backgroundColor: "#EEEEEE",
                width: "30px",
              }}
            />

            <FormControl
              placeholder="Re-enter New Password"
              aria-label="Re-enter New Password"
              value={reNewPass}
              onChange={(e) => setReNewPass(e.target.value)}
              type="password"
            />
          </InputGroup>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary" onClick={handleUpdate}>
              Update Password
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassWord;
