import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from "./contacts-actions";

const initialContactState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const items = createReducer(initialContactState, {
  [action.addContact]: (state, { payload }) => [payload, ...state],
  [action.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.name !== payload),
});

const filter = createReducer("", {
  [action.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
