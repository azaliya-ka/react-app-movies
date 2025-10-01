import { configureStore, createSlice } from '@reduxjs/toolkit';
import { movies } from '../MockedData';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: movies,
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    updateMovie: (state, action) => {
        state.map(movie => {
            if (movie.id === action.payload.id) {
                return movie = action.payload;
            }
        })
    },
    deleteMovie: (state, action) => {
        state.map((movie, movieId) => {
            if (movie.id === action.payload.id) {
               return state.splice(movieId, 1);
            }
        })
    },
  }
});

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
    },
});

export const { addMovie, updateMovie, deleteMovie } = moviesSlice.actions

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export default store;