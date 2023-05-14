import { List } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getData, getFilter } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getData);
  const filter = useSelector(getFilter);

  const filterCorrectData = () => {
    const newNormFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(newNormFilter)
    );
  };

  const filterContacts = filterCorrectData();

  return (
    <List>
      {filterContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} id={id} />;
      })}
    </List>
  );
};
