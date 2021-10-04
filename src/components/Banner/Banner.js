import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="row">
                <div className="col-md-6 first-part">
                    <h2>LINEAR Learning Point</h2>
                    <h4>Come to learn and  go to serve for nation.</h4>
                    <p>Our E learing platform's mission is to make an intelligent nation . We have been serving fow learner for long time wiith fame . According to the feedback our learner's  satsfyied us. We also acquared manyy prizes from many organization for our reputaion. </p>
                    <h4>We hope you will stay with us 😊. </h4>
                    <Link to="/about">
                        <button className="btn btn-primary">About Us</button>
                    </Link>
                </div>
                <div className="col-md-6 second-part">
                    <img className="img img-fluid" src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner; <h3>From banner</h3>