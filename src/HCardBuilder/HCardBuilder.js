import React, { useState } from 'react';
import './HCardBuilder.css';
import HCardForm from './components/HCardForm/HCardForm'
import HCardPreview from './components/HCardPreview/HCardPreview'

const HCardBuilder = () => {
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  const handleAvatarChange = e => {
    setAvatar({
      file: URL.createObjectURL(e.target.files[0])
    })
  }

  const [values, setValues] = useState({
    givenName: '',
    surname: '',
    email: '',
    phone: '',
    house: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
  })

  const [avatar, setAvatar] = useState({
    file: '',
  })

  return (
    <div className="container">
      <div className="builder-row">
        <div className="builder-col order-form">
          <HCardForm values={values} handleInputChange={handleInputChange} handleAvatarChange={handleAvatarChange} />
        </div>
        <div className="builder-col order-preview" >
          <p className="heading-preview">HCard Preview</p>
          <HCardPreview values={values} avatar={avatar} />
        </div>
      </div>
    </div>
  );
}

export default HCardBuilder;
