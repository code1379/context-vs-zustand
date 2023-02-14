import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dogs: 1,
  cats: 2,
};

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    addDogs: (state) => {
      state.dogs += 1;
    },
    addCats: (state) => {
      state.cats += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDogs, addCats } = petSlice.actions;

export default petSlice.reducer;
