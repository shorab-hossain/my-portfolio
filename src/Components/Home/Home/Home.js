import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import About from './../About/About';
import Header from './../Header/Header';
import Experience from './../My-Experience/Experience';
import Services from './../Services/Services';
import Contract from './Contract-form/Contract';
import './Home.css';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
           <Header/>
           <Services/>
           <Portfolio/>
           <Experience/>
           <Testimonial/>
           <Contract/>
            <About/>
        </div>
    );
};

export default Home;