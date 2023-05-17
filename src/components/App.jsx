import { Container } from './App.styled';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContact } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  // const { data, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Container
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
