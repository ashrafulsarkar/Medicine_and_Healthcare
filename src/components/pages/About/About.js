import React from 'react';
import AboutUs from '../../sections/AboutUs/AboutUs';
import Banner from '../../sections/Banner/Banner';
import './About.css';

const About = () => {
    return (
        <div>
            <Banner pageName="About"></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default About;