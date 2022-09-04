import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import About from './Components/Home/About/About';
import Footer from './Components/Home/Footer/Footer';
import Contract from './Components/Home/Home/Contract-form/Contract';
import Home from './Components/Home/Home/Home';
import Navbigation from './Components/Home/Navbigation/Navbigation';
import Services from './Components/Home/Services/Services';


const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbigation></Navbigation>
          <div>
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="service" element={<Services />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contract />} />
            </Routes>
          </div>
        </BrowserRouter>
        <div>
        </div>
        <Footer></Footer>
    </div>
  
  );
};

export default App;