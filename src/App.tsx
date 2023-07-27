import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { Home, Basket, Cafe, Registration, NotFound } from './pages';
import { auth } from './config/firebase';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/slices/loginSlice';

// Make error message
// Make payment flow
//Make User order history

const App: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.displayName) {
        const userFullName:string = user.displayName;
        const userNameSplited: string[] = userFullName?.split(' ');
        const userNickname: string = userNameSplited[0].charAt(0) + userNameSplited[1].charAt(0);
        dispatch(setUserData({ userFullName, userNickname }));
      }
    });

    return () => {
      unsubscribe();
    };
  },[auth, dispatch])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cafe/:id" element={<Cafe/>} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
