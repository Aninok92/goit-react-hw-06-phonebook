import PropTypes from "prop-types";
import Button from "../Button/ButtonTypeButton";
import ContactItem from "../ContactItem/ContactItem";
import { ImBin } from "react-icons/im";
import s from "./ContactList.module.scss";

const ContactList = ({ contacts, onDeleteContact }) => (
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
