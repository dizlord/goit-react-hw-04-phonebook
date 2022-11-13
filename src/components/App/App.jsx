import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Box from 'utils/Box';
import { PhonebookTitle, ContactsTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddName = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const includesName = contacts.findIndex(
      ({ name }) => name.toLowerCase() === normalizedName
    );
    if (includesName !== -1) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    const newContact = { id: shortid.generate(), name, number };
    setContacts(prevState => [newContact, ...prevState]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = idContact => {
    setContacts(prevState => prevState.filter(contact => contact.id !== idContact));
  };

  return (
    <Box p={4}>
      <PhonebookTitle>Phonebook</PhonebookTitle>

      <ContactForm onSubmit={handleAddName} />

      <Box mt={ 4 }>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContacts()}
          deleteContact={deleteContact}
        />
      </Box>
    </Box>
  );
}
