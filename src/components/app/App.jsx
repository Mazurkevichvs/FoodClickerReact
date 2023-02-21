import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import './app.css';
import Home from '../../pages/Home'
import Cafe1 from '../cafe-1/Cafe-1';


function App() {

    return (        
        <>    
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/cafe1" element = {<Cafe1/>}/>
        </Routes>
        </>
    )
}

export default App;