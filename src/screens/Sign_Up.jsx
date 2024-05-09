import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Calendar3,
  Envelope,
  FileLock,
  GeoAltFill,
  Person,
  Phone,
} from "react-bootstrap-icons";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Sign_Up = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const nav = useNavigate();

  const IsValaccountate = () => {
    let isproceed = true;
    let err = "Please enter the value in ";
    if (username === null || username === "") {
      isproceed = false;
      err += "username,";
      // toast.warning("Please Enter username");
    }
    if (email === null || email === "") {
      isproceed = false;
      err += "email,";
    }
    if (password === null || password === "") {
      isproceed = false;
      err += "password";
    }

    if (!isproceed) {
      toast(err.message);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid Email");
      }
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (IsValaccountate()) {
      if (password !== confirmPassword) {
        setPasswordMatchError(true);
        return;
      } else {
        setPasswordMatchError(false);
        axios
          .post("http://localhost:9999/users/register", {
            username: username,
            email: email,
            password: password,
          })
          .then((response) => {
            if (response.status === 201) {
              toast.success("Đăng ký thành công");
              nav("/sign_in");
            } else {
              toast.error("Đăng ký thất bại");
            }
          })
          .catch((error) => {
            if (error.response && error.response.status === 409) {
              // Username or email already exists
              toast.error("Username already exists");
            } 
          });
      }
    }
  };

  return (
    <Container fluid>
      <Row>
        <section className="sign-up">
          <div className="form-box-signup">
            <div className="form-value">
              <form onSubmit={handlesubmit}>
                <h2>Register</h2>
                <Row>
                  <Col md={6} sm={12} xs={12}>
                    <div className="inputbox-signup">
                      <Person className="icon" />
                      <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      ></input>
                      <label for="">UserName</label>
                    </div>
                    <div className="inputbox-signup">
                      <FileLock className="icon" />
                      <input
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                      <label for="">Email</label>
                    </div>
                    <div className="inputbox-signup">
                      <FileLock className="icon" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                      <label for="">Password</label>
                    </div>
                    <div className="inputbox-signup">
                      <FileLock className="icon" />
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      ></input>
                      {passwordMatchError && (
                        <div className="m-2 text-xs" style={{ color: "red" }}>
                          confirmPassword is wrrong !
                        </div>
                      )}
                      <label for="">ConFirmPassword</label>
                    </div>
                  </Col>
                </Row>
                <div className="btn-signup">
                  <button>Register</button>
                </div>
                <div className="register">
                <p>
                  I have a account <Link to={'/sign_in'}>Login</Link>{" "}
                </p>
              </div>
              </form>
            </div>
          </div>
        </section>
      </Row>
    </Container>
  );
};

export default Sign_Up;
