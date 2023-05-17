import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { Home, Basket, Cafe, Registration } from './pages';

//Basket with components
//Rebuild Cafe with buy buttons
//Cafe logic in redux

const MENU = [
  { name: 'schab', price: 10 },
  { name: 'pizza', price: 14 },
  { name: 'szaszlyk', price: 11 },
  { name: 'feta', price: 16 },
  { name: 'omlet', price: 12 },
  { name: 'pasta', price: 18 },
  { name: 'szaszlyczki', price: 9 },
  { name: 'grecka', price: 15 },
  { name: 'salat', price: 17 },
];

const RESTAURANTS = [
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

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home restaurants={RESTAURANTS} />} />
        <Route path="/cafe/:id" element={<Cafe menu={MENU} />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
