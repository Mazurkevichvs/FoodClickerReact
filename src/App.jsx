import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { Home, Basket, Cafe, Registration } from './pages';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from './config/firebase';

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
        <Route path="/cafe/:id" element={<Cafe/>} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
