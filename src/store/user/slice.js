import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Miriam",
  id: 14,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer
// function as we add cases to our reducer we will also
// export the corresponding actions
export const {} = userSlice.actions;
export default userSlice.reducer;
