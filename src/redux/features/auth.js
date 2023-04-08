import { createSlice } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const initialState = {
  user: "",
};

const authSlice = createSlice({
  name: "/auth",
  initialState,
  reducers: {
    getUserDetails: (state, action) => {
      state.user = action.payload;
    },
    signup: (state, action) => {
      console.log(action.payload.email);
      return createUserWithEmailAndPassword(
        auth,
        action.payload.email,
        action.payload.password
      );
    },
    login: (state, action) => {
      return signInWithEmailAndPassword(
        auth,
        action.payload.email,
        action.payload.password
      );
    },
  },
});
export default authSlice.reducer;
export const { signup, login, getUserDetails } = authSlice.actions;
