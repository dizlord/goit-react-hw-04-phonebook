import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import ErrorText from './ErrorText.styled'

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{ message }</ErrorText> }
    />
  );
}

FormError.propTypes = {name: PropTypes.string.isRequired}

export default FormError;