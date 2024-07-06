import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopSelling from "./TopSelling";
import NewProducts from "./NewProducts";
import SliderBanner from "../components/SliderBanner";
import "../style/home.css";

const Home = () => {
  return (
    <Container fluid className="p-0">
      <SliderBanner />

      <Row>
        <NewProducts />
      </Row>
      <Row>
        <TopSelling />
      </Row>
      
    </Container>
  );
};

export default Home;
