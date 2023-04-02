import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ul>
      {contacts.length > 0 ? (
        contacts
          .filter(({ name }) => name.toLowerCase().includes(filter))
          .map(contact => (
            <ContactListItem
              key={contact.id}
              contact={contact}
            ></ContactListItem>
          ))
      ) : (
        <p>No contacts added yet...</p>
      )}
    </ul>
  );
};
