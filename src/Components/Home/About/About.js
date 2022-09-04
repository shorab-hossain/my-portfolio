import { Image } from 'antd';
import "antd/dist/antd.css";
import React from 'react';
import myImage1 from '../../../image/shorab1.jpg';
import './About.css';
const About = () => {
    return (
        <div classsName="container">
            <div className="row py-4 px-5">
                <div className="col-sm-6 col-md-6 col-lg-6 col-12 p-4 d-flex justify-content-center align-items-center">
                       <div>
                       <div>
                             <h1 className='big-content'>I am a Front-end Developer Based In bangladesh.</h1>
                        </div>
                    <div>
                          <p className="small-content">My name is Shorab Hossain. I am a student of Feni government college honors 2nd year in physics department. I am a front-end developer. I have been working in this field for many years. Basically I work in web design and web development. I have learned many languages like html, CSS, bootstrap, react, JavaScript and etc. I am always eager to learn new technologies. I am interested to work in your company because I want to work with a team to improve my skills. Currently I am a node.js learner. Besically, I am doing web design and web development sector it works as backhand technology.</p>
                    </div>
                       </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-12 d-flex justify-content-center align-items-center">
                     <div>
                          <Image  style={{width:'63%'}}  className="img-fluid my-img" src={myImage1} alt='this is not loaded'/>
                     </div>
                    </div>
                <hr className='hr-style'></hr>
            </div>
               <div className='Myself fs-3'>
                    <p className='my-content'>Name : Shorab Hossain (Shakil)</p> 
                    <p className='my-content'>Email : mdshakiil720516@gmail.com</p> 
                    <p className='my-content'>Phone : +8801843720516</p> 
                    <p className='my-content'>Address : Academy(Feni), Dhaka, Bangladesh</p>
                </div>
        </div>
    );
};

export default About;