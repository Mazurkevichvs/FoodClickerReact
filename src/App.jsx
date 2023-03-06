import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Home, Basket, Cafe} from './pages';

//make Registration component
//Basket with components
//Rebuild Cafe with buy buttons
//Cafe logic in redux

const App = () => {
  
  const data = [
    {
      name: 'PENSJONAT LAGUNA',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.',
      pic: 'laguna_logo.png',
      key: 1,
    },
    {
      name: 'BATISTA',
      desc: 'Restauracja Batista zaprasza na pyszną: pizze, makarony, sałatki, dania tradycyjne oraz burgery. Otwarte codziennie od godz. 11:00 do 23:00.',
      pic: 'batista1.png',
      key: 2,
    },
    {
      name: 'CAFE KREDENS',
      desc: 'Cafe Kredens - to miejsce magiczne, z bardzo przytulnym wnętrzem i miłą atmosferą. O każdej porze roku możecie Państwo do nas zaglądnąć i poczuć się, jak na wakacjach.',
      pic: 'Kredens.jpg',
      key: 3,
    },
    { name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', key: 4 },
    { name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', key: 5 },
    { name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', key: 6 },
  ];

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home data={data}/>}
        />
        <Route path="/cafe/:id" element={<Cafe />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
};

export default App;
