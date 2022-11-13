import React, { Component } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Box from 'utils/Box';
import { PhonebookTitle, ContactsTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddName = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const includesName = this.state.contacts.findIndex(
      ({ name }) => name.toLowerCase() === normalizedName
    );
    if (includesName !== -1) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    const newContact = { id: shortid.generate(), name, number };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  componentDidUpdate = (_, prevState) => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  componentDidMount = () => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      const contactsParsed = JSON.parse(contacts);
      this.setState({contacts: contactsParsed});
    }
  }

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box p={4}>
        <PhonebookTitle>Phonebook</PhonebookTitle>

        <ContactForm onSubmit={this.handleAddName} />

        <Box mt={ 4 }>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </Box>
      </Box>
    );
  }
}
