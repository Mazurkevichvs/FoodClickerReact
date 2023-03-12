import React, { useRef, useEffect } from 'react';
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
            <a onClick={closePopup} href="#" className="modal__close">
              &times;
            </a>
          </div>
          <div className="modal__body">
            <form className="modal__form">
              <Input label={'Login lub E-Mail:'} id={'login'} name={"login"}/>
              <Input label={'Hasło:'} id={'password'} name={"password"}/>
              <a className="modal__link" href="#">
                Nie pamiętasz hasła?
              </a>
              <div className="modal__buttons">
                <Button name={'Zaloguj się'} />
                <p>lub</p>
                <Button name={'Zarejestruj się'} />
              </div>
              <a href="#" className="login__img">
                <img src="img/loginfacebook.png" alt="SIgn up with Facebook" />
              </a>
              <a href="#" className="login__img">
                <img src="img/googlesingup.png" alt="Sing up with Google" />
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopupForm;
