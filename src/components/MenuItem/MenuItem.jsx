import React, { useState } from 'react';
import './MenuItem.css';
import { useSelector, useDispatch } from 'react-redux'
import { increaseCount, decreaseCount, setOrder } from '../../redux/slices/basketSlice';

const MenuItem = ({ menu }) => {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.basketSlice)
  const addToOrder = () => {
    const obj = {
      ...menu,
      count,
    };
    dispatch(setOrder(obj));
  };

  return (
    <div className="menu__container">
      <img className="menu__img" src={`/img/${menu.name}.png`} alt={menu.name} />
      <div className="menu__inner">
        <div className="menu__count">
          <div className="menu__increment" onClick={() => dispatch(decreaseCount())}>
            -
          </div>
          <div className="menu__counter">{count}</div>
          <div className="menu__increment" onClick={() => dispatch(increaseCount())}>
            +
          </div>
        </div>
        <button className="btn menu__btn" onClick={() => addToOrder()}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
