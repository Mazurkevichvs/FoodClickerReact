import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from '../../pages/Home'
import Cafe from '../Cafe/Cafe';
import Basket from '../../pages/Basket';


function App() {

    return (        
        <>    
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/cafe" element = {<Cafe/>}/>
            <Route path="/basket" element = {<Basket/>}/>
        </Routes>
        </>
    )
}

export default App;