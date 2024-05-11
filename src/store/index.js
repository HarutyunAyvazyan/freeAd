import { configureStore } from '@reduxjs/toolkit';
import favoriteState from './featueres/favoriteState';
import modalCallUser from './featueres/modalCallUser';

const store = configureStore({
  reducer: {
    favorite: favoriteState,
    modalCallUser:modalCallUser,
  },
});

export default store;