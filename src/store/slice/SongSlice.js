import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      return state.filter((song) => song !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export default songSlice.reducer;
export const { addSong, removeSong } = songSlice.actions;
