import React from 'react';
import { Button, Input } from '../components';
import './Registration.css';

const Registration = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <section className="registration">
            <h1 className="title reg__title">REJESTRACJA:</h1>
            <form className="form__inner">
              <Input label={'Imię:'} id={'name'} name={'name'} />
              <Input label={'Nazwisko:'} id={'surname'} name={'surname'} />
              <Input label={'E-Mail:'} id={'email'} name={'email'} />
              <Input label={'Hasło:'} id={'password'} name={'password'} />
              <Input label={'Powtórz hasło:'} id={'password2'} name={'password2'} />
              <Button name={'Zarejestruj się'} className={'btn__send'} />
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default Registration;
