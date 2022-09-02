import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Portfolio.css';


const Portfolio = () => {
   const  [myPortfolioCard, setPortfolioCard] = useState([]);
   useEffect(() => {
    fetch('./portfolioDataCard.json')
    .then(res => res.json())
    .then(result => setPortfolioCard(result))
},[])
    return (
            <div className="container pb-5 ">
                <div className='text-center py-4'  data-aos="fade-up"
                    data-aos-duration="2000">
                        <h1 className='fw-bold pb-3 heading' style={{fontSize:'50px',color:'#fd7a14'}}>My Portfolio</h1>
                        <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <Col className='portfolio-card' sm={12} md={6} xs={8}>
                    {
                        myPortfolioCard.map(singleCard =>
                            <Card data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" key={singleCard.id} style={{ width: '18rem' }} className="mySingleCard">
                            <Card.Img className="my-image" variant="top" src={singleCard.img} />
                              <Card.Body>
                                    <Card.Title className="fw-bold pb-2">{singleCard.title}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    <Button variant="primary button"><span className="fw-bold me-2"><a href={singleCard.LiveLink} style={{textDecoration:'none',color:"#ffff"}}>view </a> </span></Button>
                                 </Card.Body>
                            </Card>
                        )
                    }
                </Col>
        </div>
    );
};

export default Portfolio;