// redux/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Експортуємо екшен
export const { setFilter } = filterSlice.actions;
// Експортуємо редюсер
export default filterSlice.reducer;
