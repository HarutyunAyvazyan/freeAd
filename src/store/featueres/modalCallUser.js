import { createSlice } from "@reduxjs/toolkit";


const modalCallUser = createSlice({
  name: "modalCall",
  initialState: {
    isOpenCall: false,
    isOpenMessage: false
  },
  reducers: {
    toggleModalCallClose: state => {
      state.isOpenCall = false;
    },
    toggleModalCallOpen: state => {
      state.isOpenCall = true;
    },
    toggleModalMessageOpen: state => {
      state.isOpenMessage = true;
    },
    toggleModalMessageClose: state => {
      state.isOpenMessage = false;
    }
  }
})


export const { toggleModalCallClose, toggleModalCallOpen, toggleModalMessageOpen, toggleModalMessageClose } = modalCallUser.actions;
export default modalCallUser.reducer;