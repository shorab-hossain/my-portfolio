import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch('./FakeDataCard.json')
        .then(res => res.json())
        .then(result => setCards(result))
    },[])
    return (
        <div className="bg-dark text-light">
           <div className="container pb-5 ">
                <div className='text-center py-4'  data-aos="fade-up"
                    data-aos-duration="2000">
                        <h1 className='fw-bold pb-3 heading' style={{fontSize:'50px',color:'#fd7a14'}}>My Awesome Service</h1>
                        <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div className='main-cards pt-4 pb-3'>
                    {
                    cards.map(card => <Service key={card
                    .id} card={card}></Service>) 
                    }
                </div>
           </div>
        </div>
    );
};

export default Services;