import React from 'react';
import './Hero.css';
import heroImage from '../../../images/hero.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="hero-section" style = {{backgroundImage: `url(${heroImage})`}}>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="hero-part">
                            <h3>
                                <span>Dr.</span>
                                Patterson
                            </h3>
                            <h5>professional care for your pets</h5>
                            <p>One of the essential qualities of a professional veterinarian is his patience. At our clinic, we  take a great care of you little furry friends. 
							</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;