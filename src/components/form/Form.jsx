import React from 'react';
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

          <label className="form__label" htmlFor="username">
            Imię i Nazwisko
          </label>
          <input type="text" name="Name" className="form__name" id="username" required />
          <label className="form__label" htmlFor="email">
            Adres E-mail
          </label>
          <input type="text" name="e-mail" className="form__name" id="email" required />
          <label htmlFor="comment" className="form__label">
            Wiadomość
          </label>
          <textarea className="form__comment" name="message" id="comment" required></textarea>
          <button className="btn btn__send">WYŚLIJ</button>
        </form>
      </section>
    </div>
  );
}

export default Form;
