import 'animate.css';
import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ScrollToTop from "react-scroll-to-top";
import iconImage1 from '../../../image/facebook.png';
import iconImage2 from '../../../image/Github.png';
import logoImage from '../../../image/logo.png';
import iconImage3 from '../../../image/twitter.png';
import iconImage4 from '../../../image/whatsapp.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark">
             <ScrollToTop smooth />
            <div className='py-3  container'>
            <div className='d-flex justify-content-around align-items-center'>
                   <div className=''>
                         <img  className='img-fluid logoImage'  src={logoImage} alt=""/>
                   </div> 
                   <div className="d-flex justify-content-center ">
                        <div>
                        <a href="https://www.facebook.com/profile.php?id=100015420465801"><img className='img-fluid iconImage me-4 animate__animated animate__fadeInDown'  src={iconImage1} alt=""/></a>
                        </div>
                        <div><a href="https://github.com/shorab-hossain"> <img className='img-fluid iconImage me-3 animate__animated animate__fadeInDown'  src={iconImage2} alt=""/></a></div>
                        <div><img className='img-fluid iconImage animate__animated animate__fadeInDown'  src={iconImage3} alt=""/> </div>
                        <div>
                        <a
                            href="https://wa.me/018433720516"
                            className="whatsapp_float"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                       <img className='whatsapp' src={iconImage4} alt=""/>
                         </a>
                        </div>
                   </div>
                   <div className='copy-right'>
                        <p className="text-dark">Copyright © 2022. All Rights Reserved.</p>
                        <p className='design text-warning'>Design By <span className='fw-bold text-light ms-2'>Shorab Hossain (Shakil)</span></p>
                   </div>
                </div>
                <div>   
                <MessengerCustomerChat
                    pageId="105963864281345"
                    appId="762018248244913"
                    />
            </div>
            </div>
        </div>
    );
};

export default Footer;