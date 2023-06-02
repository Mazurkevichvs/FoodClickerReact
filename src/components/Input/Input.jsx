import React from 'react';
import './Input.css';

const Input = ({ type, name, id, label, onChange, value }) => {
  return (
    <>
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <input
        onChange={onChange}
        type={type ? type : 'text'}
        name={name ? name : ''}
        value={value}
        className="form__name"
        id={id}
        required
      />
    </>
  );
};

export default Input;
