import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseItemCount, decreaseItemCount, removeItem } from '../../redux/slices/basketSlice';

const BasketItem = ({ menuItemName, price, count, cafeName, itemSum }) => {
  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch(increaseItemCount({menuItemName, cafeName}));
  };
  const decreaseCount = () => {
    dispatch(decreaseItemCount({menuItemName, cafeName}));
  };

  return (
    <div className="basket__order">
      <div className="order__name">
        <img className="order__img" src={`img/${menuItemName}.png`} alt={menuItemName} />
        <div className="order__info">
          <p>{cafeName}</p>
          <h3 className="order__title">{menuItemName}</h3>
          <h4 className="order__subtitle">
            {count} x {price}
          </h4>
        </div>
      </div>
      <div className="order__count">
        <button className="count__button" onClick={() => decreaseCount()}>
          -
        </button>
        <p className="count__quantity">{count}</p>
        <button className="count__button" onClick={() => increaseCount()}>
          +
        </button>
      </div>
      <div className="order__price">{itemSum}zł</div>
      <div>
        <img
          className="order__delete"
          src="img/trash.png"
          alt="delete order"
          onClick={() => dispatch(removeItem({menuItemName, cafeName}))}
        />
      </div>
    </div>
  );
};

export default BasketItem;
