import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { Home, Basket, Cafe, Registration } from './pages';

const MENU = [
  { name: 'schab', price: 10, id: 1 },
  { name: 'pizza', price: 14, id: 2 },
  { name: 'szaszlyk', price: 11, id: 3 },
  { name: 'feta', price: 16, id: 4 },
  { name: 'omlet', price: 12, id: 5 },
  { name: 'pasta', price: 18, id: 6 },
  { name: 'szaszlyczki', price: 9, id: 7 },
  { name: 'grecka', price: 15, id: 8 },
  { name: 'salat', price: 17, id: 9 },
];

const RESTAURANTS = [
  {
    name: 'PENSJONAT LAGUNA',
    desc: 'Serwujemy dania kuchni polskiej i europejskiej. W naszej ofercie  znajdziesz tradycyjne dania, które smakują tak jak w domu, a także bardziej oryginalne propozycje inspirowane kulinariami różnych krajów.',
    pic: 'laguna_logo.png',
    id: 1,
  },
  {
    name: 'BATISTA',
    desc: 'Restauracja Batista zaprasza na pyszną: pizze, makarony, sałatki, dania tradycyjne oraz burgery. Otwarte codziennie od godz. 11:00 do 23:00.',
    pic: 'batista1.png',
    id: 2,
  },
  {
    name: 'CAFE KREDENS',
    desc: 'Cafe Kredens - to miejsce magiczne, z bardzo przytulnym wnętrzem i miłą atmosferą. O każdej porze roku możecie Państwo do nas zaglądnąć i poczuć się, jak na wakacjach.',
    pic: 'Kredens.jpg',
    id: 3,
  },
  { name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', id: 4 },
  { name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', id: 5 },
  { name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', id: 6 },
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
