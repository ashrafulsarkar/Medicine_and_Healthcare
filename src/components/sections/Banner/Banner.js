import React from 'react';
import './Banner.css';
import bannerImage from '../../../images/banner.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = ({pageName}) => {
    return (
        <section className="banner-section" style = {{backgroundImage: `url(${bannerImage})`}}>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="banner-part">
                            <h3>
                            {pageName}
                            </h3>
                            <h5><Link to="/">Home</Link> - {pageName}</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;