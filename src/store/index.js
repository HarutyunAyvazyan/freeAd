import { configureStore } from '@reduxjs/toolkit';
import favoriteState from './featueres/favoriteState';

const store = configureStore({
  reducer: {
    favorite: favoriteState,
  },
});

export default store;