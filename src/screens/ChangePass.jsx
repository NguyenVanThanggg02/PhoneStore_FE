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
      toast.error("Please fill in all fields!");
      return;
    }
    if (newPass !== reNewPass) {
      toast.error("New passwords do not match!");
      return;
    }
    if (oldPass !== user.password) {
      toast.error("Old password is incorrect!");
      return;
    }
    if (oldPass === newPass && oldPass === reNewPass) {
      toast.error("The new password must be different from the old password");
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
        toast.error("Change password failed!");
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
