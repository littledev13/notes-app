import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    username: null,
    email: null,
    chats: null,
  },
  reducers: {
    login: (state, action) => {
      // console.log("test : ", action.payload.username);
      state.username = action.payload.username;
      state.email = action.payload.email;
      // state.chats = action.payload.chats;
    },
    logout: (state) => {
      state.username = null;
      state.email = null;
      state.chats = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
