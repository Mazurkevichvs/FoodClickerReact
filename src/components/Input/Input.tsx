import React, {ChangeEvent} from 'react';
import './Input.css';

interface InputProps {
  type?: string,
  name?: string,
  id: string,
  label: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  value: string
}

const Input: React.FC<InputProps> = ({ type, name, id, label, onChange, value }) => {
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
