import React from 'react';
import './Input.css'

const Input = ({ type, name, id, label}) => {
  return (
    <>
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type ? type : 'text'}
        name={name ? name : ''}
        className="form__name"
        id={id}
        required
      />
    </>
  );
};

export default Input;
