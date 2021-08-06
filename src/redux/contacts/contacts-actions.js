import types from "./contacts-types";
import shortid from "shortid";

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = (name) => ({
  type: types.DELETE,
  payload: name,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
