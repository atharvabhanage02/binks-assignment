import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";
import commentsReducer from "../features/commentSlice";
const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentsReducer,
  },
});
export default store;
