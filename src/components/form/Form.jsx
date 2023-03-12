import React from 'react';
import { Button, Input } from '../';
import './Form.css';

const Form = () => {
  return (
    <div className="container">
      <section id="form" className="form">
        <h1 className="form__title">DOŁĄCZ DO NAS I ZACZNIJ WSPÓŁPRACĘ!</h1>
        <p className="form__subtitle">(formularz dla kontrahenta)</p>
        <form action="#" method="post" className="form__inner">
          {/* <!-- Hidden Required Fields --> */}
          <input type="hidden" name="project_name" value="Foodclicker.pl" />
          <input type="hidden" name="admin_email" value="info@foodklicker.pl" />
          <input type="hidden" name="form_subject" value="Oferta" />
          {/* <!-- END Hidden Required Fields --> */}

          <Input label={'Imię i Nazwisko'} id={'username'} name={'Name'} />
          <Input label={'Adres E-mail'} id={'email'} name={'e-mail'} />
          <label htmlFor="comment" className="form__label">
            Wiadomość
          </label>
          <textarea className="form__comment" name="message" id="comment" required></textarea>
          <Button className={'btn__send'} name={'WYŚLIJ'} />
        </form>
      </section>
    </div>
  );
};

export default Form;
