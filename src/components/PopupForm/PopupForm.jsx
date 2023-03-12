import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './PopupForm.css';

const PopupForm = ({ closePopup }) => {
  const modal = useRef();

  const clickOutside = (e) => {
    if (modal.current && !modal.current.contains(e.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickOutside);
    return () => document.removeEventListener('click', clickOutside);
  }, [modal]);

  return (
    <section className="modal">
      <div className="modal__bg">
        <div ref={modal} className="modal__content">
          <div className="modal__header">
            <h1 className="modal__title">Zaloguj się:</h1>
            <div onClick={closePopup} className="modal__close">
              &times;
            </div>
          </div>
          <div className="modal__body">
            <form className="modal__form">
              <Input label={'Login lub E-Mail:'} id={'login'} name={"login"}/>
              <Input label={'Hasło:'} id={'password'} name={"password"}/>
              <p className="modal__link" href="#">
                Nie pamiętasz hasła?
              </p>
              <div className="modal__buttons">
                <Button name={'Zaloguj się'} />
                <p>lub</p>
                <Link to={'/registration'}><Button name={'Zarejestruj się'} /></Link>
              </div>
              <div href="#" className="login__img">
                <img src="img/loginfacebook.png" alt="SIgn up with Facebook" />
              </div>
              <div href="#" className="login__img">
                <img src="img/googlesingup.png" alt="Sing up with Google" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopupForm;
