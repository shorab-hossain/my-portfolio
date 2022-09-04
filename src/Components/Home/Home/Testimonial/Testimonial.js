import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaArrowRight, FaSignature } from "react-icons/fa";
import './Testimonial.css';


const Testimonial = () => {
    return (
        <div className='py-5 bg-dark'>
            <div className="container">
                <div className="row">
                    <div className='py-4 col-md-6 col-sm-12 col-lg-6'>
                    <p  style={{fontSize:"60px",fontWeight:"700",color:"rgb(253, 122, 20)"}}>My Pricing</p>
                    </div>
                        <div className="col-md-6 col-sm-12 col-lg-6">
                        <Tabs
                        defaultActiveKey="profile"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                        >
                        <Tab eventKey="home" title="Basic" >
                            {/* first-tabs-design */}
                        <div className="card-group my-card " data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                                <div className="card py-4">
                                    <div className="card-body ">
                                    <h5 className="card-title title-pricing">Make Your Single Page</h5>
                                    <div>
                                        <div className='d-flex justify-content-between mb-4'>
                                                <h4 className='text-muted mb-3'>Web Design</h4>
                                                <button className='btn-pricing' type="text" style={{width:'w-30'}}>$30.00</button>
                                        </div>
                                        <p className='content-item'>i am creative a attractive website design.I always try to my best output.If u interested so you are Contract me?</p>
                                        <div className='row'>
                                            <div className="col-md-6 col-sm-12 col-lg-6 ul-item">
                                                <ul className="text-decoration-none">
                                                    <li>1 Page with Web Page Design</li>
                                                    <li>Design Customization</li>
                                                    <li>Responsive Design</li>
                                                    <li>Content Upload</li>
                                                    <li>Design Customization</li>
                                                </ul>
                                            </div>
                                            <div className='col-md-6 col-sm-12 col-lg-6 ul-item'>
                                                <ul className="text-decoration-none  ">
                                                        <li>1 page Design</li>
                                                        <li>Design Customization</li>
                                                        <li>Design Figma</li>
                                                        <li>Maintaine Desig</li>
                                                        <li>Content Upload</li>
                                                        <li>Design With XD</li>
                                                    </ul>
                                            </div>
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='d-flex justify-content-center my-btn'>
                                    <button type="submit" className="btn btn-outline-success mb-4 d-flex justify-content-center"><span className='me-2'>Order Now </span><div >
                                    <FaArrowRight className='fw-boldicon-div'/>
                                    </div></button>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <h5 className='me-4'>1 Days Delivery</h5>
                                    <h5><FaSignature className='me-3'/>Unlimited Revission</h5>
                                </div>
                                </div> 
                            </div>
                            
                        </Tab>
                        <Tab eventKey="profile" title="Standard" className='text-light'>
                        <div className="card-group my-card " data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                                <div className="card py-4">
                                    <div className="card-body ">
                                    <h5 className="card-title title-pricing text-dark">3 page Design</h5>
                                    <div>
                                        <div className='d-flex justify-content-between mb-4'>
                                                <h4 className='text-muted mb-3'>Web Design</h4>
                                                <button className='btn-pricing' type="text" style={{width:'w-30'}}>$50.00</button>
                                        </div>
                                        <p className='content-item'>i am creative a attractive website design.I always try to my best output.If u interested so you are Contract me?</p>
                                        <div className='row'>
                                            <div className="col-md-6 col-sm-12 col-lg-6 ul-item">
                                                <ul className="text-decoration-none">
                                                    <li>3 Page Design</li>
                                                    <li>Design Customization</li>
                                                    <li>Responsive Design</li>
                                                    <li>Content Upload</li>
                                                    <li>Design Customization</li>
                                                </ul>
                                            </div>
                                            <div className='col-md-6 col-sm-12 col-lg-6 ul-item'>
                                                <ul className="text-decoration-none  ">
                                                        <li>3 page web Design</li>
                                                        <li>Design Customization</li>
                                                        <li>Design Figma</li>
                                                        <li>Maintaine Desig</li>
                                                        <li>Content Upload</li>
                                                        <li>Design With XD</li>
                                                    </ul>
                                            </div>
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='d-flex justify-content-center my-btn'>
                                    <button type="submit" className="btn btn-outline-success mb-4 d-flex justify-content-center"><span className='me-2'>Order Now </span><div >
                                    <FaArrowRight className='fw-boldicon-div'/>
                                    </div></button>
                                </div>
                                <div className='d-flex justify-content-around text-dark'>
                                    <h5 className='me-4'>2 Days Delivery</h5>
                                    <h5><FaSignature className='me-3'/>Unlimited Revission</h5>
                                </div>
                                </div> 
                            </div>
                        </Tab>
                        <Tab eventKey="longer-tab" title="Premium">
                        <div className="card-group my-card " data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                                <div className="card py-4">
                                    <div className="card-body ">
                                    <h5 className="card-title title-pricing">Multiple page Design</h5>
                                    <div>
                                        <div className='d-flex justify-content-between mb-4'>
                                                <h4 className='text-muted mb-3'>Web Design</h4>
                                                <button className='btn-pricing' type="text" style={{width:'w-30'}}>$80.00</button>
                                        </div>
                                        <p className='content-item'>i am creative a attractive website design.I always try to my best output.If u interested so you are Contract me?</p>
                                        <div className='row'>
                                            <div className="col-md-6 col-sm-12 col-lg-6 ul-item">
                                                <ul className="text-decoration-none">
                                                    <li>Multiple  Web Page Design</li>
                                                    <li>Design Customization</li>
                                                    <li>Responsive Design</li>
                                                    <li>Content Upload</li>
                                                    <li>Design Customization</li>
                                                </ul>
                                            </div>
                                            <div className='col-md-6 col-sm-12 col-lg-6 ul-item'>
                                                <ul className="text-decoration-none  ">
                                                        <li>multipage Web page Design</li>
                                                        <li>Design Customization</li>
                                                        <li>Design Figma</li>
                                                        <li>Maintaine Desig</li>
                                                        <li>Content Upload</li>
                                                        <li>Design With XD</li>
                                                    </ul>
                                            </div>
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='d-flex justify-content-center my-btn'>
                                    <button type="submit" className="btn btn-outline-success mb-4 d-flex justify-content-center"><span className='me-2'>Order Now </span><div >
                                    <FaArrowRight className='fw-boldicon-div'/>
                                    </div></button>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <h5 className='me-4'>3 Days Delivery</h5>
                                    <h5><FaSignature className='me-3'/>Unlimited Revission</h5>
                                </div>
                                </div> 
                            </div>
                        </Tab>
                        </Tabs>
                        </div>
                    </div>
            </div> 
        </div>
  );
}


export default Testimonial;