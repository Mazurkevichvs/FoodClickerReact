import React, { useEffect } from 'react';
import { CafeListItem, Loader } from '..';
import './CafeList.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCafes } from '../../redux/slices/cafeSlice';

interface MenuItem {
  id: string,
  name: string,
  price: number
}

interface Cafe {
  id:string,
  description: string,
  name: string,
  pic: string,
  menu: MenuItem[]
}

interface RootState {
  cafeSlice: {
    cafes: Cafe[],
    status: string
  }
}

const CafeList:React.FC = () => {
  const dispatch = useDispatch();
  const { cafes, status } = useSelector((state:RootState) => state.cafeSlice);

  useEffect(() => {
    dispatch(fetchCafes() as any);
  }, []);
  const cafe = cafes.map((el) => <CafeListItem key={el.id} {...el} />);

  return (
    <section className="offer">
      <div className="container">
        <h1 className="offer__title">OFERTY PROMOCYJNE</h1>
        {status === 'error' ? (
        <h1 className='offer__link'>Niestety pojawił się błąd :(</h1>
        ) : (
          <div className="offer__inner">
            {status === 'loading'
              ? [...new Array(4)].map((el, index) => <Loader key={index} />)
              : cafe}
          </div>
        )}
      </div>
    </section>
  );
};

export default CafeList;
