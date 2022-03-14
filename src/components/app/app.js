import React, {useState, useEffect, useRef} from 'react';
import { Routes, Route, Link} from "react-router-dom";
import './app.css';
import Header from '../header';
import Footer from '../footer';
import Slider from '../slider';
import CafeList from "../cafe-list/";
import Form from '../form/';
import PopupForm from '../popup-form/';
import Cafe1 from '../cafe-1/';





function App() {
    const [visiblePopup, setVisiblePopup] = useState(false);
    

    const data = [
        {name: 'PENSJONAT LAGUNA', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.', pic: 'laguna_logo.png', key: 1},
        {name: 'BATISTA',
        desc: 'Restauracja Batista zaprasza na pyszną: pizze, makarony, sałatki, dania tradycyjne oraz burgery. Otwarte codziennie od godz. 11:00 do 23:00.', 
        pic: 'batista1.png' , key: 2},
        {name: 'CAFE KREDENS', desc: 'Cafe Kredens - to miejsce magiczne, z bardzo przytulnym wnętrzem i miłą atmosferą. O każdej porze roku możecie Państwo do nas zaglądnąć i poczuć się, jak na wakacjach.', pic: 'Kredens.jpg', key: 3},
        {name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', key: 4},
        {name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', key: 5},
        {name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', key: 6}
    ]

    const closePopup = () => {
        setVisiblePopup(false);
    }
    

    function togglePopup(e) {
        e.preventDefault()
        setVisiblePopup(!visiblePopup) 
    }

    return (        
        <>  
        <Header togglePopup={togglePopup} />
        <main className="main">
         <div className="container">
            <section className="about">
            <h1 className="about__title">O NAS</h1>
            <p className="about__subtitle">Chcesz zaoszczędzić i smacznie zjeść?<br/>
                    Dzięki Food Clicker jest to jeszcze prostrze! <br/>
                    Oferujemy najtańsze i najlepsze promocje dań w lokalach Świnoujścia. <br/>
                    Wybierz ofertę spośród wybranych lokali i zacznij oszczędzać! :) <br/>
                    </p>
            </section>   
        </div>
        <Slider/>
        <Routes>
            <Route path="/cafe1" element = {<Cafe1/>}/>
        </Routes>
        <CafeList cafes={data}/>
        <Form/>
        {visiblePopup && <PopupForm closePopup={closePopup} togglePopup={togglePopup}/>}
     </main>
        <Footer/>
        </>
    )
}

export default App;