import { StyledHeading } from 'components/Common';
import { IconButton } from 'components/Common/StyledComponents/IconButton.styled';
import { Modal } from 'components/Modal/Modal';
import { AddContactForm } from 'components/Phonebook/AddContactForm/AddContactForm';
import { ContactList } from 'components/Phonebook/ContactList/ContactList';
import { Filter } from 'components/Phonebook/Filter/Filter';
import { Toolbar } from 'components/Toolbar/Toolbar';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { CONST } from 'redux/constants';
import { addContact, fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { search } = useSelector(selectFilter);
  const user = useAuth();
  const [isModalOpen, setIsModalOpen] = useState();
  const [isAdding, setIsAdding] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    if (contacts?.length > 0) {
      setFilteredContacts(
        [
          ...contacts
            .filter(contact => contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name)),
        ].sort()
      );
    } else {
      setFilteredContacts([]);
    }
  }, [contacts, search]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, user.token]);

  const handleModalClose = e => {
    setIsModalOpen(false);
  };

  const handleAddContactSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, number } = form.elements;

    const isNameInContacts = contacts.some(contact => contact.name.toLocaleLowerCase() === name.value.trim().toLocaleLowerCase());

    if (isNameInContacts) {
      setTimeout(() => {
        window.alert('This name already exists in the list!');
      }, 100);
      return;
    }

    setIsAdding(true);
    dispatch(addContact({ name: name.value, number: number.value }));
    setIsAdding(false);
    handleModalClose();
    dispatch(fetchContacts());
  };

  return !user.isLoggedIn && !user.isRefreshing ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Toolbar>
        <Filter />
        <IconButton style={{ color: '#bbffbb' }} onClick={e => setIsModalOpen(true)}>
          {CONST.icon.add}
        </IconButton>
      </Toolbar>

      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} />
      ) : contacts.length > 0 ? (
        <StyledHeading>Nothing found</StyledHeading>
      ) : (
        <StyledHeading>Your phonebook is empty</StyledHeading>
      )}

      <Modal isModalOpen={isModalOpen} handleClose={handleModalClose} title="Add new contact">
        <AddContactForm isLoading={isAdding} handleSubmit={handleAddContactSubmit} />
      </Modal>
    </>
  );
};

export default Phonebook;
