// import { contactsReducer } from "./contactsSlice";
// import { filtersReducer } from "./filtersSlice";

import { configureStore } from "@reduxjs/toolkit";
// persistStorage
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
const contactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], // blacklist: ["showProfilesList"]
};
export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
