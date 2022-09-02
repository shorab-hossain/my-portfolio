
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import myImage from '../../../../image/shorab.png';

import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import initializeAuthentication from './../../../Firebase/Firebase.initialize';
import './Contract.css';

initializeAuthentication()
const Contract = () => {

    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('')
    const [isLogIn,setIsLogIn] = useState(false)
    
 
    const auth = getAuth();

      const handlleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be at least 6 characters long');
            return;
        }
         if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('Password must be at least 2 number');
            return;
        }
        if(isLogIn){
            processLogIn(email,password);
        }
        else{
            createNewUser(email,password)
        }
        
      }
      const toggleChecked = e =>{
        setIsLogIn(e.target.checked)
      }
      const handleEmail = e =>{
        setEmail(e.target.value)
      }
      const handlePassword = e =>{
        setPassword(e.target.value)
      }
      const processLogIn =(email,password) =>{
        signInWithEmailAndPassword (auth,email,password)
        .then(result =>{
                const user = result.user;
                console.log(user)
               setError('')
                
        })
        .catch((error) =>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
      }
      const createNewUser = (email,password) =>{
        createUserWithEmailAndPassword (email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setError('')
             handleEmailVerify()
        })
      }
      const handleEmailVerify =() =>{
        sendEmailVerification(auth.currentUser)
        .then(() => {
     });
      }
    return (
        <div className="bg-dark">
                <div className="container py-5">
                        <div className="row">
                        <div className="col-md-6 col-sm-12 col-lg-6">
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={myImage} style={{height:"300px"}} />
                                    <Card.Body>
                                        <Card.Title>Shorab Hossain</Card.Title>
                                        <Card.Text>
                                        <p>I am a front-end Developer.I worked in this field in many year. I have learned a lot of language. There are like HTML5,CSS,BOOTSTRAP, JAVASCRIPT, REACT and etc.</p>
                                        </Card.Text>
                                        {
                                            user.email && <div>
                                                <h4>User name :{user.name}</h4>
                                                <p>User email : {user.email}</p>
                                                <img src={user.img} alt=""/>
                                            </div>
                                    }
                                        {
                                            user.name && <div>
                                                <h4>User name :{user.name}</h4>
                                                <p>User email : {user.email}</p>
                                                <img src={user.img} alt=""/>
                                            </div>
                                    }
                                    </Card.Body>
                                 </Card>
                             </div>
                             <div className='col-md-6 col-sm-12 col-lg-6'>
                                
                             <form className='text-light' >
                             <h4 className="mb-3">{isLogIn ? 'LogIn':'Registered'}</h4>
                                    <div className="d-flex ">
                                        <div className='me-4'>
                                                <label className='label-design' htmlFor="fname">Email:</label><br/>  
                                            <input onBlur={handleEmail} className='form-design' type='email' required />
                                           
                                        </div>
                                        <div>
                                            <label className='label-design' htmlFor="fname">Password</label><br/>  
                                        <input onBlur={handlePassword} className='form-design' type='password' required />
                                        </div>
                                    </div>
                                    <div className="mt-0 mb-4">
                                        <textarea  className="form-message form-design" id="exampleFormControlTextarea1 " rows="3" placeholder='Write Your message'></textarea>
                                        </div>
                                        <div className="mb-3 text-danger">
                                            {error}
                                        </div>
                                        <div className="form-check">
                                        <input onChange={toggleChecked} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Already Registered?
                                        </label>
                                    </div>
                                        <button onClick={handlleSubmit}  type="submit" className="btn btn-primary py-2 px-4 fs-5 fw-bold mt-4">{isLogIn ? 'Log in' :'Register'}</button>
                                    </form>
                                </div>
                        </div>        
                    </div>
                </div>

  );
}


export default Contract;