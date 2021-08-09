import PropTypes from "prop-types";
import { ImBin } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import contactsActions from "../../redux/contacts/contacts-actions";
import Button from "../Button/ButtonTypeButton";
import ContactItem from "../ContactItem/ContactItem";
import s from "./ContactList.module.scss";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (name) =>
    dispatch(contactsActions.deleteContact(name));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <ContactItem name={name} number={number} />
          <Button onClick={() => onDeleteContact(name)}>
            <ImBin /> Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
