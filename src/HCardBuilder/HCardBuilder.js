import React, { useState } from 'react';
import './HCardBuilder.css';
import HCardForm from './components/HCardForm/HCardForm'
import HCardPreview from './components/HCardPreview/HCardPreview'

const HCardBuilder = () => {
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const [values, setValues] = useState({ 
    givenName: '', 
    surname: '', 
    email: '', 
    phone: null, 
    house: '', 
    street: '' , 
    suburb: '', 
    state: '' , 
    postcode: '', 
    country: '' 
  })
  
  return (
    <div className="container">
      <div className="builder-row">
        <div className="builder-col order-form">
          <HCardForm handleInputChange={handleInputChange} values={values}/>
        </div>
        <div className="builder-col order-preview" >
          <p className="heading-preview">HCard Preview</p>
          <HCardPreview values={values}/>
        </div>
      </div>
    </div>
  );
}

export default HCardBuilder;
