import React from 'react';
import Design from '../Home/Design-Skill/Design';
import Skill from './../Home/My-Skill/Skill';
import './Experience.css';



const Experience = () => {
    return (
        <div className='container my-3'>
            <div className='text-center py-4' data-aos="fade-up"
                    data-aos-duration="2000">
               <p className='text-primary'>1 Year+ Experience</p>
               <h1 className="" style={{fontSize:"50px",fontWeight:"bold",color:"rgb(253, 122, 20)"}}>My Resume</h1>
            </div>
            {/*--- my-tabs design--- */}
                     <ul className="nav nav-pills mb-3 shadow" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link responsive active tabs-design bg-dark py-4 px-4 fs-5 fw-bold text-center me-1" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"  style={{color:"rgb(253, 122, 20)",width:"20rem"}}>Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link responsive tabs-design bg-dark py-4 px-4 fs-5 fw-bold text-center me-1" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" style={{color:"rgb(253, 122, 20)",width:"20rem"}}>Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link responsive tabs-design bg-dark py-4 px-4 fs-5 fw-bold text-center me-1" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" style={{color:"rgb(253, 122, 20)",width:"20rem"}}>Proffessional Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link responsive  tabs-design bg-dark py-4 px-4 fs-5 fw-bold text-center me-1" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" style={{color:"rgb(253, 122, 20)",width:"20rem"}}>Interview</a>
                    </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <Skill/>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Design/>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <Skill/>
                    </div>
                    </div>  
                </div>
    );
};

export default Experience;