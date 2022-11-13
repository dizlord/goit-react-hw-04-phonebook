import React from 'react';
import PropTypes from 'prop-types';

import { Contact, Dot } from './ContactListItem.styled';
import Box from 'utils/Box';

const ContactListItem = ({ id, contactName, number, deleteContact }) => {
  return (
    <Contact>
      <Dot/>
      <Box minWidth={ 4 }>
        {contactName}: {number}
      </Box>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </Contact>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
}

export default ContactListItem;
