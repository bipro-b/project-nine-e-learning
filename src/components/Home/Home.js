import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SampleReview from '../SampleReview/SampleReview';

const Home = () => {

    // Call 4 part in home section
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <SampleReview></SampleReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;