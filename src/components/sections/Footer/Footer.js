import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <Container>
                <Row>
                <Col lg="4">
                        <div className="footer-text">
                            <h4>About Me</h4>
                            <p>Dr. Jane Patterson is a board certified Family Medicine physician who provides primary care</p>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="footer-text">
                            <h4>Working Hours</h4>
                            <p>Mon - Fri: 8.00 am - 6.00 pm</p>
                            <p>Saturday: 10.00 am - 3.00 pm</p>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="footer-text">
                            <h4>Contacts</h4>
                            <p>Phone: 1 (415) 280 80 80</p>
                            <p>489 5th Avenue New York. NY</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="copyRight text-center">Copyright © 2021 by Ashraful Sarkar. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;