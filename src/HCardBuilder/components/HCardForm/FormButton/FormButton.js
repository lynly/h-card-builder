import React from 'react';
import './FormButton.css';

const FormButton = ({ text, type, color = 'blue' }) => {
  return (
    <input className={`form-button ${color}`} type={type} value={text} />
  );
}

export default FormButton;
