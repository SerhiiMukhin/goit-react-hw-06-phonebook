import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact}></ContactListItem>
        ))
      ) : (
        <p className={css.message}>No contacts found...</p>
      )}
    </ul>
  );
};
