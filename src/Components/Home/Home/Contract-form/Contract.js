
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import myImage from '../../../../image/shakil.jpg';
import './Contract.css';

const Contract = () => {
    const form = useRef();
    const [done,setDone] = useState(false);
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vklamzn', 'template_tmt21ky', form.current, 'rWbHLgpjfv4KHXkZ3')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
              setDone('')
          });
          e.target.reset();
          
      };
     
    return (
        <div className="bg-dark">
                <div className="container py-5">
                        <div className="row">
                        <div className="col-md-6 col-sm-12 col-lg-6">
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={myImage} style={{height:"350px"}} />
                                    <Card.Body>
                                        <Card.Title className="fw-bold fs-3">Shorab Hossain</Card.Title>
                                        <Card.Text>
                                        <p>I am a front-end Developer.I worked in this field in many year. I have learned a lot of language. There are like HTML5,CSS,BOOTSTRAP, JAVASCRIPT, REACT and etc.</p>
                                        </Card.Text>
                                    </Card.Body>
                                 </Card>
                             </div>
                             <div className='col-md-6 col-sm-12 col-lg-6'>
                                
                             <form ref={form} onSubmit={sendEmail} className='text-light' >
                             <h4 className="mb-3 text-light">Contract Me</h4>
                                    <div className="d-flex ">
                                        <div className='me-4'>
                                                <label className='label-design' htmlFor="fname">Name</label><br/>  
                                            <input className='form-design' type='text' name="user_name" required />
                                           
                                        </div>
                                        <div className='me-4'>
                                                <label className='label-design' htmlFor="email">Email</label><br/>  
                                            <input className='form-design' type='email' name="user_email" required />
                                           
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <div className="mt-0 mb-4">
                                        <textarea  className="form-message form-design" id="exampleFormControlTextarea1 " rows="3" placeholder='Write Your message' name="message"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary py-2 px-4 fs-5 fw-bold mt-4" value="send"> Submit</button>
                                    </form>
                                    <div>
                                        {
                                            done && <p className='text-success text-center fs-5'>Your form submit done!!</p>
                                           
                                        }
                                    </div>
                                </div>
                        </div>        
                    </div>
                </div>

  );
}


export default Contract;