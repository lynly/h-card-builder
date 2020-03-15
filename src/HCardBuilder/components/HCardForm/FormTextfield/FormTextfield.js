import React from 'react';
import './FormTextfield.css';


const FormTextfield = ({label, id, type, value, onChange }) => {
  return (
    <>
      <label className="form-text-field-label" htmlFor={id}>{label}</label>
      <input className="form-text-field-input" type={type} id={id} name={id} value={value} onChange={onChange}/>
    </>
  );
}

export default FormTextfield;
