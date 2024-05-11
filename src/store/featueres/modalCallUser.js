import { createSlice } from "@reduxjs/toolkit";


const modalCallUser = createSlice({
    name:"modalCall",
    initialState:{
        isOpenCall:false,
        isOpenMessage:false
    },
    reducers: {
        toggleModalCall: state => {
          state.isOpenCall = !state.isOpenCall;
        },
        toggleModalMessage: state => {
          state.isOpenMessage = !state.isOpenMessage;
        }
      }
})


export const { toggleModalCall, toggleModalMessage } = modalCallUser.actions;
export default modalCallUser.reducer;