const INITIAL_STATE = { items: [] };
export const createSlice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contact/add": {
      return { ...state, items: [...state.items, action.payload] };
    }
    case "contact/delete": {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

// action add
export const addContact = (payload) => {
  return {
    type: "contact/add",
    payload,
  };
};
// action delete
export const deleteContact = (contactId) => {
  return {
    type: "contact/delete",
    payload: contactId,
  };
};
//  функції-селектори
// export const selectContacts = (state) => state.contacts.items;
// __________________________________
// if initial state such object
// const INITIAL_STATE = {
//   contacts: { items: [] },
//   filters: { name: "" },
// };

//   return {
//     ...state,
//     contacts: {
//       ...state.contacts,
//       items: [...state.contacts.items, action.payload],
//     },
//   };

//   return {
//     ...state,
//     contacts: {
//       ...state.contacts,
//       items: state.contacts.items.filter(
//         (contact) => contact.id !== action.payload
//       ),
//     },
//   };
