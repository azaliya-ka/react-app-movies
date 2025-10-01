import { configureStore, createSlice } from '@reduxjs/toolkit';
import { movies } from '../MockedData';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: movies,
  reducers: {
    ADD_MOVIE: (state, action) => {
      state.push(action.payload);
    },
    UPDATE_MOVIE: (state, action) => {
        state.map(movie => {
            if (movie.id === action.payload.id) {
                return movie = action.payload;
            }
        })
    },
    DELETE_MOVIE: (state, action) => {
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

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;