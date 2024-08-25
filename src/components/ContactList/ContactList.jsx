import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector((state) => {
  //   // console.log(state);
  //   return state.contacts.items;
  // });

  // console.log(contacts);
  const filteredContacts = useSelector((state) => {
    console.log("state", state);
    return state.contacts.items.filter((item) =>
      item.name
        .toLowerCase()
        .trim()
        .includes(state.filters.name.toLowerCase().trim())
    );
  });
  console.log("filteredContacts", filteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            phone={number}
            deleteContacts={(contactId) => {
              dispatch(deleteContact(contactId));
            }}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
