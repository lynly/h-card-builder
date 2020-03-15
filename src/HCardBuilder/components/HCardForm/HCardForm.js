import React, { useState } from 'react';
import './HCardForm.css';
import FormSubHeading from './FormSubHeading/FormSubHeading'
import FormTextfield from './FormTextfield/FormTextfield'
import FormButton from './FormButton/FormButton'

const HCardForm = ({ values, handleInputChange }) => {

  return (
    <form>
      <h1 className="heading">hCard Builder</h1>
      <div className="form-section">
        <FormSubHeading heading="Personal Details" />
        <div className="row">
          <div className="col">
            <FormTextfield label="Given Name" type="text" id="givenName" name="givenName" value={values.givenName} onChange={handleInputChange} />
          </div>
          <div className="col">
            <FormTextfield label="Surname" type="text" id="surname" name="surname" value={values.surname} onChange={handleInputChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormTextfield label="Email" type="email" id="email" name="email" value={values.email} onChange={handleInputChange}/>
          </div>
          <div className="col">
            <FormTextfield label="Phone" type="number" id="phone" name="phone" value={values.phone} onChange={handleInputChange}/>
          </div>
        </div>
      </div>
      <div className="form-section">
        <FormSubHeading heading="Address" />
        <div className="row">
          <div className="col">
            <FormTextfield label="House name or #" type="text" id="house" name="house" value={values.house} onChange={handleInputChange}/>
          </div>
          <div className="col">
            <FormTextfield label="Street" type="text" id="street" name="street" value={values.street} onChange={handleInputChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormTextfield label="Suburb" type="text" id="suburb" name="suburb" value={values.suburb} onChange={handleInputChange}/>
          </div>
          <div className="col">
            <FormTextfield label="State" type="text" id="state" name="state" value={values.state} onChange={handleInputChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormTextfield label="Postcode" type="text" id="postcode" name="postcode" value={values.postcode} onChange={handleInputChange}/>
          </div>
          <div className="col">
            <FormTextfield label="Country" type="text" id="country" name="country" value={values.country} onChange={handleInputChange}/>
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="row">
          <div className="col">
            <input type="file" id='upload-avatar' name='upload-avatar' />
          </div>
          <div className="col">
            <FormButton type="submit" text="Create hCard" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default HCardForm;
