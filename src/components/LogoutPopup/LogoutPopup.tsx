import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import './LogoutPopup.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { setIsLogged } from '../../redux/slices/loginSlice';
import { useNavigate } from 'react-router-dom';

interface LogoutPopupProps {
  setIsVisibleLogOut: Dispatch<SetStateAction<boolean>>;
}

const LogoutPopup: React.FC<LogoutPopupProps> = ({ setIsVisibleLogOut }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const popup = useRef<HTMLDivElement>(null);
  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(setIsLogged(false));
      setIsVisibleLogOut(false);
      navigate('FoodClickerReact/');
    } catch (err) {
      console.error(err);
    }
  };
  const closePopup = (e: MouseEvent) => {
    if (popup.current && !popup.current.contains(e.target as Node)) {
      setIsVisibleLogOut(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closePopup);
    return () => document.removeEventListener('mousedown', closePopup);
  }, []);

  return (
    <div ref={popup} className="logout__popup" onClick={logOut}>
      Wyloguj się
    </div>
  );
};

export default LogoutPopup;
