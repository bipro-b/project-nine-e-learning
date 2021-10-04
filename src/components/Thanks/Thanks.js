import React from 'react';
import thank from '../../images/thank.gif'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Thanks = () => {
    return (
        <div>
            <Header></Header>
            <img src={thank} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Thanks;