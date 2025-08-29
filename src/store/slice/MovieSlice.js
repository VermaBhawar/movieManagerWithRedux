import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      return state.filter((movie) => movie !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export default movieSlice.reducer;
export const { addMovie, removeMovie } = movieSlice.actions;
