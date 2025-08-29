import { configureStore } from "@reduxjs/toolkit";
import songSliceReducer, { addSong, removeSong } from "./slice/SongSlice";
import movieSliceReducer, { addMovie, removeMovie } from "./slice/MovieSlice";
import { reset } from "./action";

const store = configureStore({
  reducer: {
    songs: songSliceReducer,
    movies: movieSliceReducer,
  },
});

export { store, reset };
export { addMovie, removeMovie };
export { addSong, removeSong };
