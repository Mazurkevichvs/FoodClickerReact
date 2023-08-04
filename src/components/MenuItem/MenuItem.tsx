import React, { useEffect, useState } from 'react';
import './MenuItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket, setOrder } from '../../redux/slices/basketSlice';
import { MenuItemType, OrderItem } from '../../@types/types';

interface MenuItemProps {
  menuItem: MenuItemType;
  cafeName: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ menuItem, cafeName }) => {
  const [countItem, setCountItem] = useState<number>(0);
  const dispatch = useDispatch();
  const { order } = useSelector(selectBasket);
  useEffect(() => {
    const orderItem = order.find((el:OrderItem) => el.id === menuItem.id && el.cafeName === cafeName) as OrderItem | undefined;
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
    const obj:OrderItem = {
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
      <img className="menu__img" src={`../img/${menuItem.name}.png`} alt={menuItem.name} />
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
