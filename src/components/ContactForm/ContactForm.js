import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import s from "./ContactForm.module.scss";

function ContactForm({ contacts, onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === normalizedName ||
          contact.number === number
      )
    ) {
      alert(
        `Contact with such ${name} name or ${number} number is already in Phonebook`
      );
      reset();
      return;
    }

    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={nameInputId}>
        <span className={s.labelText}>Name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={nameInputId}
        />
      </label>
      <label className={s.label} htmlFor={numberInputId}>
        <span className={s.labelText}>Number</span>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={numberInputId}
        />
      </label>
      <button type="submit" className={s.button}>
        Add Contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      namber: PropTypes.number,
    })
  ),
};

export default ContactForm;
