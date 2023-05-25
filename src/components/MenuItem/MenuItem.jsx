import React, { useState } from 'react';
import './MenuItem.css';
import { useDispatch } from 'react-redux';
import { setOrder } from '../../redux/slices/basketSlice';

const MenuItem = ({ menu, menuItemId, setMenuItemId }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const addToOrder = () => {
    const obj = {
      name: menu.name,
      price: menu.price,
      count,
      id: menuItemId,
      itemSum: count*menu.price
    };
    if (obj.count !== 0) {
      setMenuItemId(menuItemId + 1);
      dispatch(setOrder(obj));
    } else return;
  };

  return (
    <div className="menu__container">
      <img className="menu__img" src={`/img/${menu.name}.png`} alt={menu.name} />
      <div className="menu__inner">
        <div className="menu__count">
          <div className="menu__increment" onClick={() => decreaseCount()}>
            -
          </div>
          <div className="menu__counter">{count}</div>
          <div className="menu__increment" onClick={() => increaseCount()}>
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
