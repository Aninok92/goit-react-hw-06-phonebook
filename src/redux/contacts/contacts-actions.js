import { createAction, nanoid } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", function prepare(name, number) {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contacts/changeFilter");

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
