import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, PopupForm, LogoutPopup } from '..';
import './Header.css';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../redux/slices/basketSlice';

interface InitialState {
  loginSlice: {
    isLogged: boolean,
    userNickname: string
  }
}

interface OrderItem {
  count: number
}

const Header: React.FC = () => {
  const [isVisibleLogOut, setIsVisibleLogOut] = useState<boolean>(false)
  const { isLogged, userNickname } = useSelector((state: InitialState) => state.loginSlice);
  const { order } = useSelector(selectBasket);
  const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
  const closePopup = () => {
    setVisiblePopup(false);
  };
  const totalCount: number = order.reduce((sum:number, item:OrderItem) => sum + item.count, 0);
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
                type={'button'}
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
