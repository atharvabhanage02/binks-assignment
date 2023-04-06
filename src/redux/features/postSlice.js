import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialPostState = {
  posts: [],
  loading: false,
};

export const fetchPosts = createAsyncThunk("/posts/fetchPosts", async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data);
});

const postSlice = createSlice({
  name: "posts",
  initialState: initialPostState,
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;
// export const { getUser } = postSlice.actions;
