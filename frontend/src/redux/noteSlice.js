import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNoteData: null,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setSelectedNoteData: (state, action) => {
      state.selectedNoteData = action.payload;
    },
  },
});

// Default export for the reducer
export default noteSlice.reducer;

// Named export for actions
export const { setSelectedNoteData } = noteSlice.actions;
