import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components';
import './Cafe.css';
import MenuItem from '../components/MenuItem/MenuItem';
import { MenuItemType } from '../@types/types';

interface LocationState {
  pic:string,
  name:string,
  menu: MenuItemType[]
}

const Cafe: React.FC = () => {
  const location = useLocation();
  const {pic, name, menu}  = location.state as LocationState;
  const menuItem = menu.map((el:MenuItemType) => <MenuItem key={el.id} menuItem={el} cafeName={name}/>);
  return (
    <>
      <main className="main">
        <div className="container">
          <section className="cafe__header">
            <div className="cafe__inner">
              <img className="cafe__logo" src={`/img/${pic}`} alt={name} />
              <Link to={'/basket'}>
                <Button type='button' className={'btn__order'} name={'ZAMÓW TERAZ!'} />
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
