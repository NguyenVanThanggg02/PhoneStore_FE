import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { EnvelopeFill, GeoAltFill, TelephoneFill } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <Container fluid className='px-0'>
            <footer id="footer" className="text-white ">
                <Container>
                    <Row>
                        <Col md={3} xs={6}>
                            <div className="footer">
                                <h3 className="footer-title">About Us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                                    <li><GeoAltFill /> 1734 Stonecoal Road</li>
                                    <li><TelephoneFill /> +021-95-51-84</li>
                                    <li><EnvelopeFill /> email@email.com</li>
                            </div>
                        </Col>

                        <Col md={3} xs={6}>
                            <div className="footer">
                                <h3 className="footer-title">Categories</h3>
                                    <li>Hot deals</li>
                                    <li>Laptops</li>
                                    <li>Smartphones</li>
                                    <li>Cameras</li>
                                    <li>Accessories</li>
                            </div>
                        </Col>

                        <Col md={3} xs={6}>
                            <div className="footer">
                                <h3 className="footer-title">Information</h3>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                    <li>Orders and Returns</li>
                                    <li>Terms & Conditions</li>
                            </div>
                        </Col>

                        <Col md={3} xs={6}>
                            <div className="footer">
                                <h3 className="footer-title">Service</h3>
                                    <li>My Account</li>
                                    <li>View Cart</li>
                                    <li>Wishlist</li>
                                    <li>Track My Order</li>
                                    <li>Help</li>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Container>
    );
};

export default Footer;
