import { Contact } from '../Contact/Contact';
import { StyledContactList } from './ContactList.styled';

export const ContactList = ({ contacts = [] }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </StyledContactList>
  );
};
