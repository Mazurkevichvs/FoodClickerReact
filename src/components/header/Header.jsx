import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, PopupForm, LogoutPopup } from '../';
import './Header.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isVisibleLogOut, setIsVisibleLogOut] = useState(false)
  const { isLogged, userNickname } = useSelector((state) => state.loginSlice);
  const { order } = useSelector((state) => state.basketSlice);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const closePopup = () => {
    setVisiblePopup(false);
  };
  const totalCount = order.reduce((sum, item) => sum + item.count, 0);
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
              <div className="header__login">
                <div className="header__login__wrapper">
            <div className="header__login__logo" onClick={() => setIsVisibleLogOut(!isVisibleLogOut)}>{userNickname}</div>
                {isVisibleLogOut && <LogoutPopup setIsVisibleLogOut={setIsVisibleLogOut}/>}
                </div>
                <Link to="/basket">
                  <div className='header__basket'>
                    <img src="/img/koszyk.png" alt="basket" />
                    <span className="badge">{totalCount}</span>
                  </div>
                </Link>
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
