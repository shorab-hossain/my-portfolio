import React from 'react';
import './Service.css';

const Service = (props) => {
    const {img,title,content} = props.card;
    return (
        <div className="container">
            <div className='main-card text-light'>
                <div className='card-img'>
                    <img className='img-fluid card-image' src={img} alt=""/>
                </div>
                <div className='content'>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <button className='btn btn-outline-success' type="submit">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;