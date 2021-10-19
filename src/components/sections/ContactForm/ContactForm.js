import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact-section">
            <Container>
                <Row>
                    <Col className="offset-md-2 col-md-8">
                        <div className="appointment-part">
                            <h3 className="text-center">Appointment</h3>
                            <p className="text-center">don’t waste your time, make it online</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                                    <Form.Control as="textarea" placeholder="Massage"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit Your Request
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactForm;