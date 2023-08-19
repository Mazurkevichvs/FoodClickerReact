import React, { useEffect } from 'react';
import { CafeListItem } from '..';
import './CafeList.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCafes } from '../../redux/slices/cafeSlice';
import { RootState } from '../../redux/store';
import ContentLoader from 'react-content-loader';

const CafeList: React.FC = () => {
  const dispatch = useDispatch();
  const { cafes, status } = useSelector((state: RootState) => state.cafeSlice);

  useEffect(() => {
    dispatch(fetchCafes() as any);
  }, []);
  const cafe = cafes.map((el) => <CafeListItem key={el.id} {...el} />);

  return (
    <section className="offer">
      <div className="container">
        <h1 className="offer__title">OFERTY PROMOCYJNE</h1>
        {status === 'error' ? (
          <h1 className="offer__link">Niestety pojawił się błąd :(</h1>
        ) : (
          <div className="offer__inner">
            {status === 'loading'
              ? [...new Array(4)].map((_el, index) => (
                  <ContentLoader
                    key={index}
                    className="offer__cafe"
                    speed={2}
                    width={350}
                    height={380}
                    viewBox="0 0 350 380"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="2" y="1" rx="0" ry="0" width="350" height="241" />
                    <rect x="-1" y="267" rx="15" ry="15" width="209" height="25" />
                    <rect x="1" y="305" rx="15" ry="15" width="339" height="14" />
                    <rect x="0" y="328" rx="15" ry="15" width="339" height="14" />
                    <rect x="3" y="350" rx="15" ry="15" width="339" height="14" />
                  </ContentLoader>
                ))
              : cafe}
          </div>
        )}
      </div>
    </section>
  );
};

export default CafeList;
