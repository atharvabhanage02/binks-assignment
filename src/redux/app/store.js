import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";
import commentsReducer from "../features/commentSlice";
import authReducer from "../features/auth";
const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentsReducer,
    auth: authReducer,
  },
});
export default store;
