import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
        <section className='container'>
            <div className='row '>
                <div className='col-sm-12 col-md-6 col-lg-6 border-design'>
                    <p className='fw-bold' style={{color:"rgb(253, 122, 20)"}}>2015 - 2017</p>
                    <h1 className='' style={{fontSize:"36px",fontWeight:"700"}}>Education Quality</h1>
                <div>
                <div className="card-deck py-5 card-design">
                        <div className="card bg-dark text-light p-3 mb-4 signle-card">
                            <div className="card-body">
                            <h3 className="card-title fw-bold height-design fw-bold mb-3">Font-end Developments</h3>
                            <p className="height-design">I am the master of HTML, CSS and Javascript. I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called Vue JS. I even know the deployment, server and security. I will give you 100% web solution.</p>
                            </div>
                        </div>
                        <div className="card bg-dark text-light p-3 mb-4 signle-card">
                            <div className="card-body">
                            <h3 className="card-title fw-bold height-design mb-3">Examples Of Personal Portfolio</h3>
                            <p className="card-text height-design">Hello, my name is Shorab Hossain(Shakil). I am a Junior Web Developer,i Study in honours 2nd years at Feni government College. I live in Bangladesh and my home town in Feni. Before becoming a teacher, I photography, and exploring the city by bike.</p>
                            </div>
                        </div>
                        </div>
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 ">
                    <p className='fw-bold' style={{color:"rgb(253, 122, 20)"}}>2015 - 2017</p>
                    <h1 className='' style={{fontSize:"36px",fontWeight:"700"}}>Jobs Experience</h1>
                    <div className="card-deck py-5 card-design">
                        <div className="card bg-dark text-light p-3 mb-4 signle-card">
                            <div className="card-body">
                            <h3 className="card-title fw-bold height-design mb-3">Personal Portfolio April Fools</h3>
                            <p className="height-design">I am the master of HTML, CSS and Javascript. I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called Vue JS. I even know the deployment, server and security. I will give you 100% web solution.</p>
                            </div>
                        </div>
                        <div className="card bg-dark text-light p-3 mb-4 signle-card">
                            <div className="card-body">
                            <h3 className="card-title fw-bold height-design mb-3">Examples Of Personal Portfolio</h3>
                            <p className="card-text height-design">I am the master of HTML, CSS and Javascript. I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called Vue JS. I even know the deployment, server and security. I will give you 100% web solution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;