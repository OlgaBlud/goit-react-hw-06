// import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = { name: "" };
// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: INITIAL_STATE,
//   reducers: {
//     setFilterValue: (state, action) => (state.name = action.payload),
//   },
// });

// export const { setFilterValue } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Начальное состояние фильтра
const INITIAL_STATE = { name: "" };

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue: (state, action) => {
      state.name = action.payload; // Обновление состояния фильтра
    },
  },
});

export const { setFilterValue } = filtersSlice.actions;
export default filtersSlice.reducer;
// / export const filtersReducer = filtersSlice.reducer;
