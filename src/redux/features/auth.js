import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/users";
const initialState = {
  user: "",
};

const authSlice = createSlice({
  name: "/auth",
  initialState,
  reducers: {
    getUserDetails: (state, action) => {
      console.log("Username got on first render is ", action.payload);
      state.user = action.payload;
    },
    createUser: (state, action) => {
      console.log("Payload is ", action.payload);
      users.push({
        id: 11,
        name: action.payload.displayName,
        username: action.payload.displayName,
        email: action.payload.email,
      });
    },
  },
});
export default authSlice.reducer;
export const { getUserDetails, createUser } = authSlice.actions;
