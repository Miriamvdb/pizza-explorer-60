import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Miriam",
  id: 14,
  favorites: [67283, 357311],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 1. Add a new case called "toggleFav" and export it
    toggleFav: (state, action) => {
      console.log("Toggle favorite", action);
      // 5. Write logic:
      // 5a. Get the pizza id from the payload
      const idPizzaToAdd = action.payload;
      // 5b. Check first if it's already a favorite..
      const newFavs = state.favorites.includes(idPizzaToAdd)
        ? state.favorites.filter((idNr) => idNr !== idPizzaToAdd) // If it is -> remove it..
        : [...state.favorites, idPizzaToAdd]; // if not, add it.

      state.favorites = newFavs;
    },
  },
});

export const { toggleFav } = userSlice.actions;
export default userSlice.reducer;
