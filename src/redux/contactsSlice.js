import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { items: [] };
const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

//  addProfile: (state, action) => {
//       state.profiles.push(action.payload);
//     },
//     deleteProfile: (state, action) => {
//       state.profiles = state.profiles.filter(
//         (profile) => profile.id !== action.payload
//       );
//     },
// __________________________________
// export const createSlice = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "contact/add": {
//       return { ...state, items: [...state.items, action.payload] };
//     }
//     case "contact/delete": {
//       return {
//         ...state,
//         items: state.items.filter((contact) => contact.id !== action.payload),
//       };
//     }
//     default:
//       return state;
//   }
// };

// // action add
// export const addContact = (payload) => {
//   return {
//     type: "contact/add",
//     payload,
//   };
// };
// // action delete
// export const deleteContact = (contactId) => {
//   return {
//     type: "contact/delete",
//     payload: contactId,
//   };
// };
// __________________________________
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
