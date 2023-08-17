import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, PopupForm, LogoutPopup } from '..';
import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket } from '../../redux/slices/basketSlice';
import { setVisiblePopup } from '../../redux/slices/loginSlice';

interface InitialState {
  loginSlice: {
    isLogged: boolean;
    userNickname: string;
    isVisiblePopup: boolean;
  };
}

interface OrderItem {
  count: number;
}

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [isVisibleLogOut, setIsVisibleLogOut] = useState<boolean>(false);
  const { isLogged, userNickname, isVisiblePopup } = useSelector(
    (state: InitialState) => state.loginSlice,
  );
  const { order } = useSelector(selectBasket);
  const togglePopup = () => {
    dispatch(setVisiblePopup());
  };
  const totalCount: number = order.reduce((sum: number, item: OrderItem) => sum + item.count, 0);
  
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__links">
              <div className="fb__logo">
                <img src="./img/fb_logo.png" alt="facebook"></img>
                <a
                  className="link__food"
                  href="https://www.facebook.com/Foodclicker-101761928231395">
                  FoodClicker
                </a>
              </div>
              <div className="inst__logo">
                <img src="./img/inst_logo.png" alt="instagram"></img>
                <a className="link__food" href="">
                  FoodClicker
                </a>
              </div>
            </div>
            <Link className="foodclicker" to="FoodClickerReact/">
              <img src="./img/fc_logo.png" alt="foodclicker"></img>
            </Link>
            {isLogged ? (
              <div className="header__login">
                <div className="header__login__wrapper">
                  <div
                    className="header__login__logo"
                    onClick={() => setIsVisibleLogOut(!isVisibleLogOut)}>
                    {userNickname}
                  </div>
                  {isVisibleLogOut && <LogoutPopup setIsVisibleLogOut={setIsVisibleLogOut} />}
                </div>
                <Link to="FoodClickerReact/basket">
                  <div className="header__basket">
                    <img src="./img/koszyk.png" alt="basket" />
                    <span className="badge">{totalCount}</span>
                  </div>
                </Link>
              </div>
            ) : (
              <Button
                onClick={togglePopup}
                className={'btn__login'}
                name={'Zaloguj się!'}
                type={'button'}
              />
            )}
          </div>
        </div>
      </header>
      {isVisiblePopup && <PopupForm />}
    </>
  );
};

export default Header;
