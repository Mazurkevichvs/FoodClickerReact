import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { Home, Basket, Cafe, Registration } from './pages';
import { auth } from './config/firebase';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/slices/loginSlice';

// Make error message
// Make payment flow
//Make User order history

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userFullName = user.displayName;
        const userNameSplited = user.displayName?.split(' ');
        const userNickname = userNameSplited[0].charAt(0) + userNameSplited[1].charAt(0);
        dispatch(setUserData({ userFullName, userNickname }));
      }
    });

    return () => {
      unsubscribe();
    };
  },[])
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
