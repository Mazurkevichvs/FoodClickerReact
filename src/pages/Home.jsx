import React, { useEffect } from 'react';
import {Slider, CafeList, Form} from '../components/';
import { auth } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/slices/loginSlice';

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        const userFullName = user.displayName;
        const userNameSplited = user.displayName?.split(' ');
        const userNickname = userNameSplited[0].charAt(0) + userNameSplited[1].charAt(0);
        dispatch(setUserData({ userFullName, userNickname }));
      }
    });

    return () => {
      // Clean up the subscription when the component unmounts
      unsubscribe();
    };
  },[])
  return (
    <>
      <main className="main">
        <div className="container">
          <section className="about">
            <h1 className="title">O NAS</h1>
            <p className="about__subtitle">
              Chcesz zaoszczędzić i smacznie zjeść?
              <br />
              Dzięki Food Clicker jest to jeszcze prostrze! <br />
              Oferujemy najtańsze i najlepsze promocje dań w lokalach Świnoujścia. <br />
              Wybierz ofertę spośród wybranych lokali i zacznij oszczędzać! :) <br />
            </p>
          </section>
        </div>
        <Slider />
        <CafeList/>
        <Form />
      </main>
    </>
  );
}

export default Home;
