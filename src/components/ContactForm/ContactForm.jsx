import React from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import FormError from 'components/FromError';
import Box from 'utils/Box';
import { FormStyled, Label } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    onSubmit({ name, number });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <div>
          <Label htmlFor="name">Name</Label>
          <Box mt={2}>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <FormError name="name" />
          </Box>
        </div>
        <Box mt={4} mb={4}>
          <Label htmlFor="number">Number</Label>
          <Box mt={2}>
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <FormError name="number" />
          </Box>
        </Box>
        <button type="submit">Add contact</button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
