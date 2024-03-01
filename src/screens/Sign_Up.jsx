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
import { useNavigate } from "react-router-dom";

const Sign_Up = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    let regobj = {
      user: {
        username: username,
        email: email,
        password: password,
      },
    };
    if (IsValaccountate()) {
      axios
        .post("https://api.realworld.io/api/users", regobj, {
          headers: { "content-type": "application/json" },
        })
        .then((res) => {
          toast.success("Registered successfully.");
          nav("/sign_in");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
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
                      <Envelope className="icon" />
                      <input
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                      <label for="">Email</label>
                    </div>
                    <div className="inputbox-signup">
                      <Phone className="icon" />
                      <input type="text"></input>
                      <label for="">Phone</label>
                    </div>
                    <div className="inputbox-signup">
                      <GeoAltFill className="icon" />
                      <input type="text"></input>
                      <label for="">Address</label>
                    </div>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <div className="inputbox-signup">
                      <Calendar3 className="icon" />
                      <input type="text"></input>
                      <label for="">Date Of Birth</label>
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
                      <input type="password"></input>
                      <label for="">Re-Password</label>
                    </div>{" "}
                  </Col>
                </Row>

                <div className="statement">
                  <input type="checkbox" value="" />
                  <label className="form-check-label">
                    I agree with this statement
                  </label>
                </div>
                <div className="btn-signup">
                  <button>Register</button>
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
