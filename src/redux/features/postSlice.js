import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuid } from "uuid";

const initialPostState = {
  posts: [],
  myPosts: [],
  loading: false,
};

export const fetchPosts = createAsyncThunk("/posts/fetchPosts", async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data);
});

var id = 101;

const postSlice = createSlice({
  name: "posts",
  initialState: initialPostState,
  reducers: {
    createPost: (state, action) => {
      state.posts.push({
        id: id,
        title: "",
        body: action.payload,
        userId: 10,
      });
      state.myPosts.push({
        id: id,
        title: "",
        body: action.payload,
        userId: 10,
      });
      id++;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.myPosts = state.myPosts.filter(
        (post) => post.id !== action.payload
      );
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;
export const { createPost, deletePost } = postSlice.actions;
