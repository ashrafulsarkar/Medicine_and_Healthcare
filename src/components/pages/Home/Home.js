import React from 'react';
import Appointment from '../../sections/Appointment/Appointment';
import Hero from '../../sections/Hero/Hero';
import Map from '../../sections/Map/Map';
import Services from '../../sections/Services/Services';
import './Home.css';

const Home = () => {
    return (
        <main>
            <Hero></Hero>
            <Services></Services>
            <Appointment></Appointment>
            <Map></Map>
        </main>
    );
};

export default Home;