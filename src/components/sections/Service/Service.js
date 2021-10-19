import React from 'react';
import './Service.css';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name, image, shortdec, key } = props.service;
    return (
        <Col lg="4">
            <div className="single-service">
                <div className="service-img">
                    <img src={image} alt="" />
                </div>
                <div className="service-details">
                    <h3>{name}</h3>
                    <p>{shortdec}</p>
                    <div className="service-btn">
                        <Link to={`/service/${key}`}>Details</Link>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Service;