
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Enroll = () => {
    //Enroll form is implementd by react bootstrap
    return (
        <div>
            <Header></Header>
            <Form className="w-25 mx-auto mt-5">
                <h3>Fill the form to enroll your chosen course.</h3>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter fist name" />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="liks as Linear10" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I have completed the form." />
                </Form.Group>
            </Form>
            <Link to="/thanks"><button className="btn btn-primary mb-5" >Enroll</button></Link>
            <Footer></Footer>
        </div>
    );
};

export default Enroll;