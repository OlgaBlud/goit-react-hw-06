import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: createSlice,
  },
});
