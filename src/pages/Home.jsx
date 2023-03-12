import React from 'react';
import {Slider, CafeList, Form} from '../components/';

function Home({ data }) {
  
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
        <CafeList cafes={data} />
        <Form />
      </main>
    </>
  );
}

export default Home;
