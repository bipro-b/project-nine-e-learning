import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Serrvice/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    // fake data is loading from json 
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    // object is passing to service component
    return (
        <div>
            <Header></Header>
            <Container className="my-5">
                <Row xs={1} md={4} className="g-4">
                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Services; <h3>From services</h3>