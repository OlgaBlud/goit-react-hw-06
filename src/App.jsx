import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
// import initialContacts from "./data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const contactsFromLSData = JSON.parse(
  //     window.localStorage.getItem("contacts")
  //   );
  //   if (contactsFromLSData !== null && contactsFromLSData.contacts.length > 4) {
  //     return contactsFromLSData.contacts;
  //   }
  //   return initialContacts;
  // });

  const dispatch = useDispatch();
  const selectContacts = (state) => state.contacts.items;
  const contacts = useSelector(selectContacts);
  console.log("APPcontacts:", contacts);
  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify({ contacts }));
  // }, [contacts]);

  const onAddContact = (newContact) => {
    console.log(newContact);
    dispatch(addContact(newContact));
    //   setContacts((prevContactList) => {
    //     return [...prevContactList, newContact];
    //   });
  };

  const deleteContacts = (contactId) => {
    dispatch(deleteContact(contactId));
    //   setContacts((prevContactList) =>
    //     prevContactList.filter((contact) => contact.id !== contactId)
    //   );
  };
  const [searchValue, setSearchValue] = useState("");

  // const filteredContacts = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(searchValue.toLowerCase());
  // });
  return (
    <div className="phonebookWrap">
      <h1>Phonebook</h1>

      <ContactForm onAddContact={onAddContact} />
      <SearchBox
        searchValue={searchValue}
        handleSearchChange={setSearchValue}
      />
      {contacts && (
        <ContactList contacts={contacts} deleteContacts={deleteContacts} />
      )}
    </div>
  );
}

export default App;
