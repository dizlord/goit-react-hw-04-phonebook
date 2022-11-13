import React from 'react';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';
import Box from 'utils/Box';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Box as='ul' pl={ 4 }>
      {contacts.map(({ id, name: contactName, number }) => (
        <ContactListItem key={id} id={id} contactName={contactName} number={number} deleteContact={deleteContact} />
      ))}
    </Box>
  );
};

ContactList.propTipes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};


export default ContactList;