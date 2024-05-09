import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  Envelope,
  Facebook,
  FileLock,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";

const Sign_In = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.warning("Please enter your email");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter your password");
    }
    return result;
  };

  const ProcessLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(email, password);
      axios
        .post("http://localhost:9999/users/login", {
            username: email,
            password: password,
        })
        .then((res) => {
          const user = res.data.user;
          console.log(res);
          localStorage.setItem("user", JSON.stringify(user));
          toast.success("Success");
          handleLogin(user);
          nav("/");
        })
        .catch((error) => {
          toast.error("Login Failed due to: " + error.message);
        });
    }
  };

  return (
    <Container fluid className="p-0">
      <section className="sign-in">
        <div className="form-box-login">
          <div className="form-value">
            <form onSubmit={ProcessLogin}>
              <h2>Login</h2>
              <div className="inputbox-login">
                <Envelope className="icon" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
                <label for="">Email</label>
              </div>
              <div className="inputbox-login">
                <FileLock className="icon" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
                <label for="">Password</label>
              </div>
              <div className="forget">
                    <input
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      Remember me
                    </label>
                    <Link to={"/"}>Forget Password</Link>
                  </div>
              <div className="btn-login">
                <button>Login</button>
              </div>

              <div className="register">
                <p>
                  Don't have a account <Link to={'/sign_up'}>Register</Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Sign_In;
