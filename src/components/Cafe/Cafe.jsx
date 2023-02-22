import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Cafe.css';

function Cafe() {
  return (
    <>
    <Header/>
    <main className="main">
      <div className="container">
        <section className="cafe__header">
          <div className="cafe__inner">
            <img className="cafe__logo" src="img/laguna_logo.png" alt="laguna" />
            <a className="btn btn__order" href="#">
              <img className="btn__call" src="img/btn_call.png" alt="call" />
              <p>ZAMÓW TERAZ! 100 200 300</p>
            </a>
          </div>
          <div className="cafe__outer">
            <img src="img/schab.png" alt="schab" />
            <img src="img/pizza.png" alt="schab" />
            <img src="img/szaszlyk.png" alt="schab" />
            <img src="img/feta.png" alt="schab" />
            <img src="img/omlet.png" alt="schab" />
            <img src="img/pasta.png" alt="schab" />
            <img src="img/szaszlyczki.png" alt="schab" />
            <img src="img/grecka.png" alt="schab" />
            <img src="img/salat.png" alt="schab" />
          </div>
        </section>
      </div>
    </main>
    <Footer/>
    </>
    
  );
}

export default Cafe;
