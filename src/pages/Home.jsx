import React from 'react';
import Slider from '../components/Slider/Slider';
import CafeList from '../components/CafeList/CafeList';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Home({ data }) {
  
  return (
    <>
      <Header/>
      <main className="main">
        <div className="container">
          <section className="about">
            <h1 className="about__title">O NAS</h1>
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
        <CafeList cafes={data} />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default Home;
