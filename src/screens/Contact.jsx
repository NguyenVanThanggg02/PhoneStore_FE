import React from "react";
import {
  EnvelopeCheckFill,
  Facebook,
  GeoAlt,
  GeoAltFill,
  Globe,
  HouseHeartFill,
  Instagram,
  Send,
  Telephone,
  TelephoneInboundFill,
  Twitter,
} from "react-bootstrap-icons";
import "../style/contact.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
const Contact = () => {
  const items = [
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓤𝓼
        </span>
      ),
      url: "http://localhost:3000/blog",
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
    <Container fluid style={{ marginBottom: "50px" }}>
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
      <div>
        <div className="text-center mb-5">
          <h2 className="heading-section" style={{ textAlign: "center", marginTop:'50px' }}>
            𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓤𝓼
          </h2>
        </div>
      </div>
      <div>
        <Row>
          <Container className="d-flex">
            <div className="col-5  ">
              <div
                className=" bg-info w-100 p-md-5 p-4 text-white"
                style={{ height: "688px" }}
              >
                <h3>Let's get in touch</h3>
                <p className="mb-4">
                  We're open for any suggestion or just to have a chat
                </p>
                <Row className=" text-white" style={{ marginBottom: "50px" }}>
                  <Col xs="auto">
                    <GeoAltFill
                      style={{
                        fontSize: "30px",
                        color: "#FF0000",
                      }}
                    />
                  </Col>
                  <Col>
                    <span>
                      Address: 198 West 21th Street, Suite 721 New York, NY
                      10016
                    </span>
                  </Col>
                </Row>
                <Row className=" text-white" style={{ marginBottom: "50px" }}>
                  <Col xs="auto">
                    <TelephoneInboundFill
                      style={{
                        fontSize: "30px",
                        color: "#00CC00",
                      }}
                    />
                  </Col>
                  <Col>
                    <span>Phone:</span> + 1235 2355 98
                  </Col>
                </Row>
                <Row className=" text-white" style={{ marginBottom: "50px" }}>
                  <Col xs="auto">
                    <EnvelopeCheckFill
                      style={{
                        fontSize: "30px",
                        color: "#770000",
                      }}
                    />
                  </Col>
                  <Col>
                    <span>Email: info@yoursite.com</span>
                  </Col>
                </Row>
                <Row className=" text-white" style={{ marginBottom: "50px" }}>
                  <Col xs="auto">
                    <Globe
                      style={{
                        fontSize: "30px",
                        color: "#0000FF",
                      }}
                    />
                  </Col>
                  <Col>
                    <span>Website</span> yoursite.com
                  </Col>
                </Row>
                <Row
                  style={{
                    margin: "30px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Col
                    style={{
                      fontSize: "40px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <a
                      href="https://www.facebook.com/vanthangggg2"
                      target="_blank"
                    >
                      <Facebook style={{ marginRight: "10px", color:'blue' }} />
                    </a>

                    <a
                      href="https://www.instagram.com/justin.t_g/"
                      target="_blank"
                    >
                      <Instagram
                        style={{ marginRight: "10px", color: "#ca2765" }}
                      />{" "}
                    </a>
                    <a href="">
                      <Twitter style={{ color: "#0033FF" }} />{" "}
                    </a>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="col-7  ">
              <div className="contact-wrap  p-md-5 p-4">
                <h3 className="mb-4">Get in touch</h3>
                <div id="form-message-warning" className="mb-4"></div>
                <div id="form-message-success" className="mb-4">
                  Your message was sent, thank you!
                </div>
                <form
                  method="POST"
                  id="contactForm"
                  name="contactForm"
                  className="contactForm"
                  noValidate
                >
                  <div className="grid ">
                    <div >
                      <div className="form-group w-full">
                        <label className="label" htmlFor="name">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div >
                      <div className="form-group w-full">
                        <label className="label" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <label className="label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary bg-primary"
                    />
                    <div className="submitting"></div>
                  </div>
                </form>
              </div>
            </div>
          </Container>
        </Row>
      </div>
    </Container>
  );
};

export default Contact;
