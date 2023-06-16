import React, { useEffect } from 'react';
import {Slider, CafeList, Form} from '../components/';
import { auth } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/slices/loginSlice';

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(auth)
    if(auth.currentUser !== null) {
      const userFullName = auth.currentUser.displayName
      const userNameSplited = auth.currentUser.displayName.split(' ')
      const userNickname = userNameSplited[0].charAt(0) + userNameSplited[1].charAt(0)
      dispatch(setUserData({userFullName, userNickname}))
    }
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
