import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./data/data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);

    return (
        <section className="service-section">
            <Container>
                <Row>
                    <Col>
                        <div className="site-title">
                            <h3>Welcome to My Clinic</h3>
                            <p>best services for your pets</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;