import React from 'react';
import './FormButton.css';

const FormButton = ({ text }) => {
  return (
    <input className="form-button blue" type="submit" value={text} />
  );
}

export default FormButton;
