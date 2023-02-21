import React, { useState } from 'react';
import Slider from '../components/slider/Slider';
import CafeList from '../components/cafe-list/Cafe-list';
import Form from '../components/form/Form';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PopupForm from '../components/popup-form/Popup-form';

function Home() {
  const [visiblePopup, setVisiblePopup] = useState(false)

  const closePopup = () => {
    setVisiblePopup(false);
  };

  const togglePopup = () => {
    console.log(123);
    setVisiblePopup(!visiblePopup);
  }

  const data = [
    {
      name: 'PENSJONAT LAGUNA',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.',
      pic: 'laguna_logo.png',
      key: 1,
    },
    {
      name: 'BATISTA',
      desc: 'Restauracja Batista zaprasza na pyszną: pizze, makarony, sałatki, dania tradycyjne oraz burgery. Otwarte codziennie od godz. 11:00 do 23:00.',
      pic: 'batista1.png',
      key: 2,
    },
    {
      name: 'CAFE KREDENS',
      desc: 'Cafe Kredens - to miejsce magiczne, z bardzo przytulnym wnętrzem i miłą atmosferą. O każdej porze roku możecie Państwo do nas zaglądnąć i poczuć się, jak na wakacjach.',
      pic: 'Kredens.jpg',
      key: 3,
    },
    { name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', key: 4 },
    { name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', key: 5 },
    { name: 'REKLAMA', desc: 'TU MOŻE BYĆ TWOJA REKLAMA!', pic: 'fc_logo.png', key: 6 },
  ];

  return (
    <>
    <Header setVisiblePopup={setVisiblePopup}/>
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
      {visiblePopup && <PopupForm closePopup={closePopup} togglePopup={togglePopup} />}
    </main>
    <Footer/>
    </>
    
  );
}

export default Home;
