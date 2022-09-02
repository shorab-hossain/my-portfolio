import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import './Design.css';

const Design = () => {
    const myRef = document.querySelector('.scrollable-div')
    return (
        <section className='container'>
        <div className='row '>
            <div className='col-sm-12 col-md-6 col-lg-6 border-design'>
                <p className='fw-bold' style={{color:"rgb(253, 122, 20)"}}>Features</p>
                <h1 className='' style={{fontSize:"36px",fontWeight:"700"}}>Design Skills</h1>
            <div className="card-deck py-5 card-design">
                <h1 className=" fw-bold">HTML5</h1>
                        <ProgressBar
                    width="500px"
                    height="10px"
                    fontColor="white"
                    trackWidth="10"
                    percentage="70"
                    trackPathColor="grey"
                    trackBorderColor="black"
                    hollowBackgroundColor="#333333"
                    defColor={{
                        fair: 'orangered',
                        good: 'yellow',
                        excellent: 'green',
                        poor: 'red',
                    }}
                    scrollArea={myRef}
                    />
                    <h1 className=" fw-bold">CSS3</h1>
                        <ProgressBar
                    width="500px"
                    height="10px"
                    fontColor="white"
                    trackWidth="10"
                    percentage="60"
                    trackPathColor="grey"
                    trackBorderColor="black"
                    hollowBackgroundColor="#333333"
                    defColor={{
                        fair: 'orangered',
                        good: 'yellow',
                        excellent: 'green',
                        poor: 'red',
                    }}
                    scrollArea={myRef}
                    />
                    <h1 className=" fw-bold">BOOTSTRAP</h1>
                        <ProgressBar
                    width="500px"
                    height="10px"
                    fontColor="white"
                    trackWidth="10"
                    percentage="60"
                    trackPathColor="grey"
                    trackBorderColor="black"
                    hollowBackgroundColor="#333333"
                    defColor={{
                        fair: 'orangered',
                        good: 'blue',
                        excellent: 'green',
                        poor: 'red',
                    }}
                    scrollArea={myRef}
                    />
            </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 ">
                <p className='fw-bold' style={{color:"rgb(253, 122, 20)"}}>Features</p>
                <h1 className='' style={{fontSize:"36px",fontWeight:"700"}}>Design Skills</h1>
                <div className="card-deck py-5 card-design">
                <h1 className=" fw-bold">JAVASCRIPT</h1>
                        <ProgressBar
                    width="500px"
                    height="10px"
                    fontColor="white"
                    trackWidth="10"
                    percentage="70"
                    trackPathColor="grey"
                    trackBorderColor="black"
                    hollowBackgroundColor="#333333"
                    defColor={{
                        fair: 'orangered',
                        good: 'blue',
                        excellent: 'yellow',
                        poor: 'red',
                    }}
                    scrollArea={myRef}
                    />
                     <h1 className=" fw-bold">REACT.JS</h1>
                        <ProgressBar
                    width="500px"
                    height="10px"
                    fontColor="white"
                    trackWidth="10"
                    percentage="50"
                    trackPathColor="grey"
                    trackBorderColor="black"
                    hollowBackgroundColor="#333333"
                    defColor={{
                        fair: 'orangered',
                        good: 'green',
                        excellent: 'green',
                        poor: 'red',
                    }}
                    scrollArea={myRef}
                    />
                    <h1 className=" fw-bold">NODE.JS</h1>
                        <ProgressBar
                    width="500px"
                    height="10px"
                    fontColor="white"
                    trackWidth="10"
                    percentage="30"
                    trackPathColor="grey"
                    trackBorderColor="black"
                    hollowBackgroundColor="#333333"
                    defColor={{
                        fair: 'orangered',
                        good: 'yellow',
                        excellent: 'blue',
                        poor: 'red',
                    }}
                    scrollArea={myRef}
                    />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Design;