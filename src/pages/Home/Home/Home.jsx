import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Works';
import OurServices from '../OurServices';
import Brands from '../Brands/Brands';
import TrustSection from '../Trust/TrustSection';
import Reveiws from '../reveiws/Reveiws';
const reviewsPromise = fetch('/reviews.json').then(res=>res.json());
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <OurServices></OurServices>
            <Brands></Brands>
            <TrustSection></TrustSection>
            <Reveiws reviewsPromise={reviewsPromise}></Reveiws>
        </div>
    );
};

export default Home;