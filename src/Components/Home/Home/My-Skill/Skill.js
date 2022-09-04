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
                            <h3 className="card-title fw-bold height-design fw-bold mb-3 text-light">Secondary School Certificate</h3>
                            <p className="height-design">I studied in Shaheen Academy School and College. I was in the science department.</p>
                            </div>
                        </div>
                        <div className="card bg-dark text-light p-3 mb-4 signle-card">
                            <div className="card-body">
                            <h3 className="card-title fw-bold height-design mb-3 text-light">Higher Secondary School Certificate</h3>
                            <p className="card-text height-design">I studied in Moulovi samsul korim college. I was in the science department.</p>
                            </div>
                        </div>
                        <div className="card bg-dark text-light p-3 mb-4 signle-card">
                            <div className="card-body">
                            <h3 className="card-title fw-bold height-design mb-3 text-light">Bachelor of Science (B.S.C)</h3>
                            <p className="card-text height-design">My name is Shorab Hossain. I am a student of Feni government college honors 2nd year in physics department. </p>
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
                            <h3 className="card-title fw-bold height-design mb-3 text-light">Personal Portfolio April Fools</h3>
                            <p className="height-design">I am the master of HTML, CSS and Javascript. I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called Vue JS. I even know the deployment, server and security. I will give you 100% web solution.</p>
                            </div>
                        </div>
                        <div className="card bg-dark text-light p-3 mb-4 signle-card">
                            <div className="card-body">
                            <h3 className="card-title fw-bold height-design mb-3 text-light">Examples Of Personal Portfolio</h3>
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