import React, { useState } from 'react';
import { Button, Input } from '../';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, 3000)
    setName('')
    setEmail('')
    setMessage('')
  };
  return (
    <div className="container">
      <section id="form" className="form">
        <h1 className="form__title">DOŁĄCZ DO NAS I ZACZNIJ WSPÓŁPRACĘ!</h1>
        <p className="form__subtitle">(formularz dla kontrahenta)</p>
        <form onSubmit={handleSubmit} action="#" method="post" className="form__inner">
          <Input
            onChange={(e) => setName(e.target.value)}
            label={'Imię i Nazwisko'}
            id={'username'}
            name={'Name'}
            value={name}
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            label={'Adres E-mail'}
            id={'email'}
            name={'e-mail'}
            value={email}
          />
          <label htmlFor="comment" className="form__label">
            Wiadomość
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="form__comment"
            name="message"
            id="comment"
            required
            value={message}></textarea>
          {isSubmited && <p className="form__message">Wiadomość została wysłana!</p>}
          <Button type={'submit'} className={'btn__send'} name={'WYŚLIJ'} />
        </form>
      </section>
    </div>
  );
};

export default Form;
