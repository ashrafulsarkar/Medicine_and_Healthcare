import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './SingleService.css';

const SingleService = () => {
    const {serviceKey} = useParams();
    const [service, setService] = useState([]);
    
    useEffect(()=>{
        fetch(`../data/${serviceKey}.json`)
        .then(res => res.json())
        .then(data => setService(data));
    },[serviceKey, setService]);

    console.log(service);

    return (
        <div>
            <section className='singleService' style={{backgroundImage: `url(/${service[0]?.image})`}}>
                <Container>
                    <Row>
                        <Col>
                            <h3 className="text-center">{service[0]?.name}</h3>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="details-service">
                <Container>
                    <Row>
                        <Col>
                            <p>{service[0]?.details}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default SingleService;