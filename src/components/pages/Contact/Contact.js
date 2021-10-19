import React from 'react';
import Banner from '../../sections/Banner/Banner';
import ContactForm from '../../sections/ContactForm/ContactForm';
import Map from '../../sections/Map/Map';

const Contact = () => {
    return (
        <div>
            <Banner pageName="Contact"></Banner>
            <ContactForm></ContactForm>
            <Map></Map>
        </div>
    );
};

export default Contact;