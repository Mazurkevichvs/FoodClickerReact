import React from 'react';
import CafeListItem from '../CafeListItem/CafeListItem';
import './CafeList.css';

const CafeList = ({ cafes }) => {
  let element = cafes.map((el) => (
    <CafeListItem key={el.key} name={el.name} desc={el.desc} pic={el.pic} id={el.key}/>
  ));

  return (
    <section className="offer">
      <div className="container">
        <h1 className="offer__title">OFERTY PROMOCYJNE</h1>
        <div className="offer__inner">{element}</div>
      </div>
    </section>
  );
};

export default CafeList;
