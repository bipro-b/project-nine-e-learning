import React from 'react';
// import { Container } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (

        <div className="footer">
            <div className="row">
                <div className="col-md-4">
                    <h2>LINEAR Learing Point </h2>
                    <p>Build your career styig with us.</p>
                    BANI©. ALl rights reseves.
                </div>
                <div className="col-md-4">
                    <h2>Courses Catagory</h2>
                    <ul className="w-25 mx-auto">
                        <li>Academic</li>
                        <li>Technical</li>
                        <li>Marketing</li>
                        <li>Freelancing</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Contact with us</h3>
                    <p> Email:b@yahoo.com</p>
                    <p> Phone number: 8989-7878-9090</p>
                    <div className="font-icon w-25 d-flex justify-content-center mx-auto justify-content-evenly">
                        <i class="fab fa-facebook"></i>
                        <i class="fas fa-envelope-open-text"></i>
                        <i class="fas fa-phone-volume"></i>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Footer; <h3>From footer</h3>