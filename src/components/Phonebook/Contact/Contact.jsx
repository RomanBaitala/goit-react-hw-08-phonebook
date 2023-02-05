import { IconButton } from 'components/Common/StyledComponents/IconButton.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CONST } from 'redux/constants';
import { deleteContact, fetchContacts } from 'redux/operations';
import { ContactEditBlock, ContactName, ContactNumber, StyledContact } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async id => {
    console.log('id', id);
    setIsLoading(true);
    await dispatch(deleteContact(id));
    await dispatch(fetchContacts());
    setIsLoading(false);
  };

  return (
    <StyledContact>
      <div style={{ width: '100%', marginLeft: '10px' }}>
        <ContactName>{contact.name}</ContactName>
        <ContactNumber>{contact.number}</ContactNumber>
      </div>
      <ContactEditBlock>
        <IconButton onClick={() => handleDelete(contact.id)} disabled={isLoading}>
          {isLoading ? CONST.icon.working : CONST.icon.delete}
        </IconButton>
      </ContactEditBlock>
    </StyledContact>
  );
};
