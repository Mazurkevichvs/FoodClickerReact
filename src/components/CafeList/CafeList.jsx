import React, { useEffect } from 'react';
import { CafeListItem } from '../';
import './CafeList.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants, setRestaurants } from '../../redux/slices/restaurantsSlice';

const CafeList = () => {
  const dispatch = useDispatch()
  const {restaurants, status} = useSelector((state) => state.restaurantsSlice)

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, []);
  const restaurant = restaurants.map((el) => (
    <CafeListItem key={el.id} name={el.name} desc={el.description} pic={el.pic} id={el.id} />
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
