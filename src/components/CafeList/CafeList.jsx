import React, { useEffect } from 'react';
import { CafeListItem } from '../';
import './CafeList.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCafes, setCafe } from '../../redux/slices/cafeSlice';

const CafeList = () => {
  const dispatch = useDispatch()
  const {cafes, status} = useSelector((state) => state.cafeSlice)

  useEffect(() => {
    dispatch(fetchCafes())
  }, []);
  const cafe = cafes.map((el) => (
    <CafeListItem key={el.id} {...el} />
  ));

  return (
    <section className="offer">
      <div className="container">
        <h1 className="offer__title">OFERTY PROMOCYJNE</h1>
        <div className="offer__inner">{cafe}</div>
      </div>
    </section>
  );
};

export default CafeList;
