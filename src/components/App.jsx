import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = newContact => {
    const { contacts } = this.state;

    const isNameExist = contacts.some(
      contact => contact.name === newContact.name
    );

    if (isNameExist) {
      alert(`${newContact.name} is already in contacts!  `);
      return;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { ...newContact, id: Math.floor(Math.random() * 1000) },
      ],
    }));
  };

  handleFilterChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
