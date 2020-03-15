import React from 'react';
import './FormSubHeading.css';

const FormSubHeading = ({ heading, value }) => {
  return (
    <div className="form-sub-row form-sub-heading">
      <div className="form-sub-col">
        <h3>{heading}</h3>
      </div>
      {value ?
        <div className="form-sub-col-6">
          <p>{value}</p>
        </div>
        : null
      }
    </div>
  );
}

export default FormSubHeading;
