import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import './Cafe.css';
import MenuItem from '../components/MenuItem/MenuItem';

const Cafe = ({menu}) => {
  const [order, setOrder] = useState([]);
  const menuItem = menu.map((el, id) => <MenuItem key={id} menu={el} order={order} setOrder={setOrder}/>)
  return (
    <>
      <main className="main">
        <div className="container">
          <section className="cafe__header">
            <div className="cafe__inner">
              <img className="cafe__logo" src="/img/laguna_logo.png" alt="laguna" />
              <Link to={'/basket'}>
                <Button className={'btn__order'} name={'ZAMÓW TERAZ!'} />
              </Link>
            </div>
            <div className="cafe__outer">
              {menuItem}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Cafe;
