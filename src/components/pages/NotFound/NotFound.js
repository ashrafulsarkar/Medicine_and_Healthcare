import React from 'react';
import './NotFound.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className="notFound">
                                <h5>404</h5>
                                <span>Not Found</span>
                                <div className="site-btn">
                                    <Link to="/" className="btn">Back to Home</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default NotFound;