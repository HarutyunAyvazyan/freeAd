import { createSlice } from '@reduxjs/toolkit';

const favoriteState = createSlice({
  name: 'favorites',
  initialState: {
    length: 0,
  },
  reducers: {
    setFavoriteLength: (state, action) => {
      state.length = action.payload;
    },
    loadFavoriteLengthFromLocalStorage: state => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      state.length = favorites.length;
    },
  },
    // addFavorite: (state, action) => {
    //   state.push({ id: action.payload, isChecked: false });
    // },
    // deleteFavorite: (state, action) => {
    //   state.splice(state.findIndex((item) => item.id === action.payload), 1)
    // },
    // onChange: (state, action) => {
    //   state.map((item) => item.id === action.payload ?item.isChecked=!item.isChecked :item.isChecked)
    //   // const newState = state.filter(product => {
    //   //   if (product.id === action.payload.id) {
    //   //     console.log(action.payload.id, 'action.payload.id')
    //   //     product.isChecked = !product.isChecked;
    //   //   }
    //   // })

    //   // return newState
    // },
    // deleteAllChecked: (state, action) => {
    //   return state.filter((item) => !item.isChecked)
    // },
    // allChecked: (state, action) => {
    //   state.forEach(product => {
    //     product.isChecked = !product.isChecked;
    //   })
    // },
    // // unAllChecked: (state, action) => {
    // //   state.forEach(product => {
    // //     product.isChecked = false;
    // //   })
    // // }

  
});

export const { setFavoriteLength, loadFavoriteLengthFromLocalStorage} = favoriteState.actions;

export default favoriteState.reducer;