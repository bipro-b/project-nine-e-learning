import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SampleReview.css'

const SampleReview = () => {
    const [reviews, setReviews] = useState([]);
    // Fake data is loading from json folder
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    // This UI samnple is implemented to show in home page as sample review in different category
    return (
        <div>
            <Container className="my-5">
                <Row xs={1} md={4} className="g-4">
                    {
                        reviews.map(review => (
                            <Container>
                                <Col>
                                    <Card className="card h-100 w-75">
                                        <Card.Img style={{ height: '150px' }} variant="top" src={review.thumb} />
                                        <Card.Body>
                                            <Card.Title>Course:{review.course}
                                            </Card.Title>
                                            <p>Category: {review.category}</p>
                                            <p>Price:{review.price} ৳</p>
                                            <Link to="/enroll"> <button style={{ alignItems: 'center', marginLeft: "40px" }} className="btn btn-primary ms-40px">Enroll Now</button></Link>
                                        </Card.Body>

                                    </Card>
                                </Col>

                            </Container>
                        ))
                    }

                </Row>
                <Link to="/services">   <button className="btn btn-success mt-5">See all our Services</button></Link>
            </Container>
        </div>
    );
};

export default SampleReview;