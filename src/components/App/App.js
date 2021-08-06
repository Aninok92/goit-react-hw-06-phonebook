//import React, { useState, useEffect } from "react";
//import shortid from "shortid";
import Container from "../Container/Container";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import Section from "../Section/Section";

function App() {
  // const [filter, setFilter] = useState("");
  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   setContacts(
  //     () =>
  //       JSON.parse(window.localStorage.getItem("contacts")) ?? [
  //         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //       ]
  //   );
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

export default App;
