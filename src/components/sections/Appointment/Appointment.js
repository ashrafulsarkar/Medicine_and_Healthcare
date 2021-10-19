import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Appointment.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import apoinmentImg from '../../../images/apoinment.jpg';

const Appointment = () => {
    return (
        <section className="appointment" style={{backgroundImage: `url(${apoinmentImg})`}}>
            <Container>
                <Row>
                    <Col className="offset-md-6">
                        <div className="appointment-part">
                            <h3>Appointment</h3>
                            <p>don’t waste your time, make it online</p>
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

export default Appointment;