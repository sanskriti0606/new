import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

export const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    // ============= UserInfo Reducers Start here ==============
    // User authentication
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },

    signoutUser: (state) => {
      state.userInfo = null;
    },
    // ============= UserInfo Reducers End here ================
  },
});

export const {
  setUserInfo,
  signoutUser,
} = spotifySlice.actions;

export default spotifySlice.reducer;
