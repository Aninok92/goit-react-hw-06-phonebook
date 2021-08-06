import PropTypes from "prop-types";
import Button from "../Button/ButtonTypeButton";
import ContactItem from "../ContactItem/ContactItem";
import { ImBin } from "react-icons/im";
import s from "./ContactList.module.scss";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

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

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (name) => dispatch(contactsActions.deleteContact(name)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
