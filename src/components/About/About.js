import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'

const About = () => {
    const [about, setAbout] = useState([]);
    //Fake data is loading 
    useEffect(() => {
        fetch('/about.json')
            .then(res => res.json())
            .then(data => setAbout(data));
    }, [])

    // Now render it to show in UI
    return (
        <div >

            <Header></Header>
            <Container className="my-5">
                <div className="mx-auto d-flex justify-content-center">
                    <p style={{ width: "500px", color: "white", backgroundColor: "grey", borderRadius: "7px", textAlign: "left", padding: "10px" }}>Group members list of our teams are given with their activities.The members of our group are much dedicated . They are alwayas ready for support for leanrer. According to shedule they join for live session with helpful mind.
                    </p>
                </div>

                <Row xs={1} sm={2} md={3} lg={4} className="g-5">
                    {
                        about.map(ab => (

                            <Container >

                                <Col className="ms-5">
                                    <Card className="card h-100 w-75 about">
                                        <Card.Img style={{ borderRadius: "50%", padding: "6px" }} variant="top" src={ab.pic} />
                                        <Card.Body>
                                            <Card.Title>Name:{ab.name}
                                            </Card.Title>
                                            <h4>Designation: {ab.position}</h4>

                                        </Card.Body>

                                    </Card>
                                </Col>
                            </Container>
                        ))
                    }

                </Row>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About; <h3>About me </h3>