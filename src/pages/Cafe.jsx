import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components';
import './Cafe.css';
import MenuItem from '../components/MenuItem/MenuItem';

const Cafe = ({ menu }) => {
  const location = useLocation();
  const {pic, name} = location.state;
  const menuItem = menu.map((el) => <MenuItem key={el.id} menuItem={el} cafeName={name}/>);
  return (
    <>
      <main className="main">
        <div className="container">
          <section className="cafe__header">
            <div className="cafe__inner">
              <img className="cafe__logo" src={`/img/${pic}`} alt={name} />
              <Link to={'/basket'}>
                <Button className={'btn__order'} name={'ZAMÓW TERAZ!'} />
              </Link>
            </div>
            <div className="cafe__outer">{menuItem}</div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Cafe;
