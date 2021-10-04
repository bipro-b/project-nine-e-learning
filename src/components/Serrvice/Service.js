import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { course, category, price, thumb } = props.service;
    // Showing to UI service components 
    return (
        <Container>
            <Col>
                <Card className="card h-100 w-75">
                    <Card.Img style={{ height: '150px' }} variant="top" src={thumb} />
                    <Card.Body>
                        <Card.Title>Course:{course}
                        </Card.Title>
                        <p>Category: {category}</p>
                        <p>Price:{price} ৳</p>
                        <Link to="/enroll"> <button style={{ alignItems: 'center', marginLeft: "40px" }} className="btn btn-primary ms-40px">Enroll Now</button></Link>
                    </Card.Body>



                </Card>


            </Col>
        </Container>
    );
};

export default Service;