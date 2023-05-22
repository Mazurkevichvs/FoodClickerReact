import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, PopupForm } from '../';
import './Header.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isLogged } = useSelector((state) => state.loginSlice);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const closePopup = () => {
    setVisiblePopup(false);
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__links">
              <div className="fb__logo">
                <img src="/img/fb_logo.png" alt="facebook"></img>
                <a
                  className="link__food"
                  href="https://www.facebook.com/Foodclicker-101761928231395">
                  FoodClicker
                </a>
              </div>
              <div className="inst__logo">
                <img src="/img/inst_logo.png" alt="instagram"></img>
                <a className="link__food" href="">
                  FoodClicker
                </a>
              </div>
            </div>
            <Link className="foodclicker" to="/">
              <img src="/img/fc_logo.png" alt="foodclicker"></img>
            </Link>
            {isLogged ? (
              <div className='header__login'>
                <div className='header__login__logo'>FC</div> 
                <Link to="/basket"><img src="/img/koszyk.png" alt="basket" /></Link>  
              </div>
              
            ) : (
              <Button
                onClick={() => setVisiblePopup(true)}
                className={'btn__login'}
                name={'Zaloguj się!'}
              />
            )}
          </div>
        </div>
      </header>
      {visiblePopup && <PopupForm closePopup={closePopup} />}
    </>
  );
};

export default Header;
