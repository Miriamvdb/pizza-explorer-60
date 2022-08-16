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
    toggleFav: (state, action) => {
      const idPizzaToAdd = action.payload;
      const newFavs = state.favorites.includes(idPizzaToAdd)
        ? state.favorites.filter((idNr) => idNr !== idPizzaToAdd)
        : [...state.favorites, idPizzaToAdd];

      state.favorites = newFavs;
    },
  },
});

export const { toggleFav } = userSlice.actions;
export default userSlice.reducer;
