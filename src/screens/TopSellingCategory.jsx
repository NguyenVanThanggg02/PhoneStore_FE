import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TopSellingCategory = () => {
    return (
        <Container>
            <Row className='text-center'>
                <Col md={4} sm={6} xs={12}>
                    <h5>TOP SELLING</h5>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <h5>TOP SELLING</h5>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <h5>TOP SELLING</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default TopSellingCategory;