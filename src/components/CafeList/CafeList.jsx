import React from 'react';
import {CafeListItem} from '../';
import './CafeList.css';

const CafeList = ({ restaurants }) => {
  let restaurant = restaurants.map((el) => (
    <CafeListItem key={el.id} name={el.name} desc={el.desc} pic={el.pic} id={el.id}/>
  ));

  return (
    <section className="offer">
      <div className="container">
        <h1 className="offer__title">OFERTY PROMOCYJNE</h1>
        <div className="offer__inner">{restaurant}</div>
      </div>
    </section>
  );
};

export default CafeList;
