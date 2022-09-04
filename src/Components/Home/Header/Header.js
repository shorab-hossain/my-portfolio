import AOS from 'aos';
import React from 'react';
import Typical from 'react-typical';
import myImage from '../../../image/bg.png';
import './Header.css';
AOS.init();


const Header = () => {
    return (
        <div className=' header'>
        <div className="container">
           <div className="d-flex justify-content-between align-items-center main-header">
           <div className='text-light col-md-6 col-sm-12 content'  data-aos="flip-left"
                 data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <p style={{fontSize:'25px'}}>WELCOME TO MY WORLD</p>
                <h1 className="fw-bold"  style={{color:'#FF014F',fontSize:"40px"}}>Hi -</h1>
                <h1 style={{color:'#FF014F',fontWeight:'900',fontSize:'40px',lineHeight:'60px'}}>I’m Shorab Hossain</h1>
                <p className='d-flex' style={{color:'#FF014F',fontWeight:'900',fontSize:'35px'}}>
                    I am {'  '}
                    <Typical className="ms-3"
                    steps={
                        [ 
                        'Front-end Developer', 1000,
                        'Web Designer', 1000,
                        'React Developer', 1000,
                        'Freelancer', 1000,
                    ]}
                    loop={1}
                    wrapper="p"
                />
                </p>
            </div>
            <div className="d-flex justify-content-center align-items-center col-md-6 col-sm-12">
                <img className='myImage img-fluid me-5' src={myImage} alt="img not found" style={{height:'600px'}}   data-aos="fade-up"
                 data-aos-duration="3000" />
            </div>
           </div>
        </div>
    </div>
    );
};

export default Header;