import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import './app.css';
import Header from '../header';
import Footer from '../footer';
import Home from '../../pages/'
import Cafe1 from '../cafe-1/';
import Slider from '../slider';





function App() {

    return (        
        <> 
        <Header/>   
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/cafe1" element = {<Cafe1/>}/>
            
        </Routes>
        <Footer/>
        </>
    )
}

export default App;