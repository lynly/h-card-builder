import React from 'react';
import './HCardPreview.css';
import FormSubHeading from '../HCardForm/FormSubHeading/FormSubHeading'


const HCardPreview = ({ values }) => {
  return (
    <>
      <div className="preview-dark-grey">
        {/* Added Name: for UX, thought it was confusing showing an empty grey box  */}
        <p className="preview-name">Name: {values.givenName} {values.surname}</p>
      </div>
      <div className="preview-white">
        <FormSubHeading heading="Email" value={values.email} />
        <FormSubHeading heading="Phone" value={values.phone} />
        <FormSubHeading heading="Address L1" value={`${values.house} ${values.street}`} />
        <FormSubHeading heading="Address L2" value={`${values.suburb} ${values.state}`} />
        <div className="row">
          <div className="col">
            <FormSubHeading heading="Postcode" value={values.postcode} />
          </div>
          <div className="col">
            <FormSubHeading heading="Country" value={values.country} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HCardPreview;