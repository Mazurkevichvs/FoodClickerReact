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
// Save cafe name to order, useSelector by cafeName and menuName
// Make menu as db
// Make fetch menu from db
// Make AsyncThunk Redux
// Make error message

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cafe/:id" element={<Cafe menu={MENU} />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
