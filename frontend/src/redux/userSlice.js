import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

// Default export for the reducer
export default userSlice.reducer;

// Named export for actions
export const { setCurrentUser } = userSlice.actions;
