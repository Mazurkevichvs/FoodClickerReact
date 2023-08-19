import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components';
import './Cafe.css';
import MenuItem from '../components/MenuItem/MenuItem';
import { MenuItemType } from '../@types/types';
import { useDispatch, useSelector } from 'react-redux';
import { setVisiblePopup } from '../redux/slices/loginSlice';
import { AppDispatch, RootState } from '../redux/store';
import { fetchCafes } from '../redux/slices/cafeSlice';
import ContentLoader from 'react-content-loader';

interface InitialState {
  loginSlice: {
    isLogged: boolean;
  };
}

const Cafe: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { isLogged } = useSelector((state: InitialState) => state.loginSlice);
  const { cafes, status } = useSelector((state: RootState) => state.cafeSlice);
  const cafeData = cafes.find((cafe) => cafe.id === id);
  const { pic, name, menu } = cafeData || {};
  const menuItem = menu?.map((el: MenuItemType) => (
    <MenuItem key={el.id} menuItem={el} cafeName={el.name} />
  ));

  useEffect(() => {
    if (status !== 'success') {
      dispatch(fetchCafes());
    }
  }, [dispatch, status]);

  return (
    <>
      <main className="main">
        <div className="container">
          <section className="cafe__header">
            <div className="cafe__inner">
              <img className="cafe__logo" src={`/FoodClickerReact/img/${pic}`} alt={name} />
              {isLogged ? (
                <Link to={'/basket'}>
                  <Button type="button" className={'btn__order'} name={'ZAMÓW TERAZ!'} />
                </Link>
              ) : (
                <Button
                  type="button"
                  className={'btn__order'}
                  name={'ZAMÓW TERAZ!'}
                  onClick={() => dispatch(setVisiblePopup())}
                />
              )}
            </div>
            <div className="cafe__outer">
              {status === 'loading' ? (
                [...new Array(6)].map((_el, index) => (
                  <ContentLoader
                    key={index}
                    className="menu__container"
                    speed={2}
                    width={378}
                    height={493}
                    viewBox="0 0 378 493"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="2" y="1" rx="0" ry="0" width="380" height="420" />
                    <rect x="6" y="438" rx="15" ry="15" width="151" height="54" />
                    <rect x="230" y="441" rx="15" ry="15" width="151" height="54" />
                  </ContentLoader>
                ))
              ) : cafeData ? (
                menuItem
              ) : (
                <h1 className="offer__link">Niestety pojawił się błąd :(</h1>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Cafe;
