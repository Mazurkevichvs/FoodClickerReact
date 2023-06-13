import React, { useEffect } from 'react';
import { CafeListItem } from '../';
import './CafeList.css';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants } from '../../redux/slices/restaurantsSlice';

const CafeList = () => {
  const dispatch = useDispatch()
  const {restaurants} = useSelector((state) => state.restaurantsSlice)
  const restaurantsCollectionRef = collection(db, 'restaurants');
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await getDocs(restaurantsCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        dispatch(setRestaurants(filteredData))
      } catch (err) {
        console.error(err);
      }
    };
    getRestaurants();
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
