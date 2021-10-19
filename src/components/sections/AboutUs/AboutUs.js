import React from 'react';
import './AboutUs.css';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImage from '../../../images/about.jpg';

const AboutUs = () => {
    return(
        <section id="about-us">
            <Container>
                <Row className="align-items-center">
                    <Col lg='6'>
                        <div className="about-image">
                            <img src={aboutImage} alt="" />
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="about-text">
                            <h4>People Trust Me</h4>
                            <p>One of the most important factors about a pet’s life is the information of, the use of, and the growing knowledge of medicine. Medicine is a form of art. It depends on how skillfully doctors apply their knowledge when dealing with patients.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutUs;