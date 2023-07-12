import React, { useEffect, useState } from 'react';
import './MenuItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket, setOrder } from '../../redux/slices/basketSlice';

interface MenuItem {
  id: string,
  name: string,
  price: number
}

interface MenuItemProps {
  menuItem: MenuItem;
  cafeName: string;
}

interface OrderObject {
    cafeName: string;
    menuItemName: string;
    price: number;
    count: number;
    id: string;
    itemSum: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ menuItem, cafeName }) => {
  const [countItem, setCountItem] = useState<number>(0);
  const dispatch = useDispatch();
  const { order } = useSelector(selectBasket);
  useEffect(() => {
    const orderItem: OrderObject = order.find((el:OrderObject) => el.id === menuItem.id && el.cafeName === cafeName);
    if (orderItem) setCountItem(orderItem.count);
  }, [order]);

  const increaseCount = () => {
    setCountItem(countItem + 1);
  };
  const decreaseCount = () => {
    if (countItem === 0) return;
    setCountItem(countItem - 1);
  };

  const addToOrder = () => {
    const obj:OrderObject = {
      cafeName,
      menuItemName: menuItem.name,
      price: menuItem.price,
      count: countItem,
      id: menuItem.id,
      itemSum: countItem * menuItem.price,
    };
    if (obj.count !== 0) {
      dispatch(setOrder(obj));
    } 
  };

  return (
    <div className="menu__container">
      <img className="menu__img" src={`/img/${menuItem.name}.png`} alt={menuItem.name} />
      <div className="menu__inner">
        <div className="menu__count">
          <div className="menu__increment" onClick={() => decreaseCount()}>
            -
          </div>
          <div className="menu__counter">{countItem}</div>
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
