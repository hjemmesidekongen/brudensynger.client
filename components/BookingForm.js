import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Tekst er for kort')
    .max(50, 'Tekst er for lang')
    .required('Påkrævet'),
  lastName: Yup.string()
    .min(2, 'Tekst er for kort')
    .max(50, 'Tekst er for lang')
    .required('Påkrævet'),
  email: Yup.string()
    .email('Ugyldig e-mail adresse')
    .required('Påkrævet'),
  phone: Yup.string()
    .min(8, 'Telefon nr. er for kort')
    .max(8, 'Telefon nr. er for lang')
    .required('Påkrævet'),
  participants: Yup.number()
    .min(1, 'Minimum 1 deltager')
    .max(30, 'Maksimum 30 deltagere')
    .required('Påkrævet'),
  studio: Yup.number().required('Påkrævet'),
});

const BookingForm = ({ studios, selectedStudio }) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        participants: 10,
        studio: selectedStudio || '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <h2>Kontakt oplysninger</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group" data-testid="wrapper-firstName">
                <label htmlFor="firstName">Fornavn</label>
                <Field
                  name="firstName"
                  id="firstName"
                  className={
                    errors.firstName && touched.firstName
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  data-testid="input-firstName"
                />
                {errors.firstName && touched.firstName ? (
                  <div className="invalid-feedback" data-testid="error-firstName">
                    {errors.firstName}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group" data-testid="wrapper-lastName">
                <label htmlFor="lastName">Efternavn</label>
                <Field
                  name="lastName"
                  id="lastName"
                  className={
                    errors.lastName && touched.lastName ? 'form-control is-invalid' : 'form-control'
                  }
                  data-testid="input-lastName"
                />
                {errors.lastName && touched.lastName ? (
                  <div className="invalid-feedback" data-testid="error-lastName">
                    {errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="form-group" data-testid="wrapper-emailAddress">
                <label htmlFor="email">E-mail adresse</label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  className={
                    errors.email && touched.email ? 'form-control is-invalid' : 'form-control'
                  }
                  data-testid="input-emailAddress"
                />
                {errors.email && touched.email ? (
                  <div className="invalid-feedback" data-testid="error-emailAddress">
                    {errors.email}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="phone">Telefon nr.</label>
                <Field
                  name="phone"
                  type="tel"
                  id="phone"
                  className={
                    errors.phone && touched.phone ? 'form-control is-invalid' : 'form-control'
                  }
                  data-testid="input-phoneNumber"
                />
                {errors.phone && touched.phone ? (
                  <div className="invalid-feedback" data-testid="error-phoneNumber">
                    {errors.phone}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <h2>Detaljer</h2>
          <div className="row">
            <div className="col-sm-6">
              <div
                className={selectedStudio ? 'form-group d-none' : 'form-group'}
                data-testid="studio-wrapper"
              >
                <label htmlFor="studio">Lydstudie</label>
                <Field
                  as="select"
                  name="studio"
                  id="studio"
                  className={
                    errors.studio && touched.studio ? 'form-control is-invalid' : 'form-control'
                  }
                  placeholder="Vælg studie"
                  data-testid="select-studio"
                >
                  {studios.map(studio => (
                    <option
                      key={`studio-${studio.id}`}
                      value={studio.id}
                      data-testid="select-option-studio"
                    >
                      {studio.name}
                    </option>
                  ))}
                </Field>
                {errors.studio && touched.studio ? (
                  <div className="invalid-feedback" data-testid="error-studio">
                    {errors.studio}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="participants">Antal deltagere</label>
                <Field
                  name="participants"
                  type="number"
                  id="participants"
                  className={
                    errors.participants && touched.participants
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  data-testid="input-participants"
                />
                {errors.participants && touched.participants ? (
                  <div className="invalid-feedback" data-testid="error-participants">
                    {errors.participants}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" data-testid="form-submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

BookingForm.defaultProps = {
  selectedStudio: null,
};

BookingForm.propTypes = {
  selectedStudio: PropTypes.number,
  studios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookingForm;
