import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from '../../pages/Home'
import Cafe from '../Cafe/Cafe';


function App() {

    return (        
        <>    
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/Cafe" element = {<Cafe/>}/>
        </Routes>
        </>
    )
}

export default App;