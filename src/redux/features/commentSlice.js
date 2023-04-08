import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialCommentState = {
  comments: [],
  loading: false,
};

export const fetchComments = createAsyncThunk("/posts/comments", async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.data);
});

var id = 501;

const commentSlice = createSlice({
  name: "comments",
  initialState: initialCommentState,
  reducers: {
    createComment: (state, action) => {
      state.comments.push({
        postId: action.payload.id,
        id: id,
        email: "Virat@gmail.com",
        body: action.payload.commentBody,
      });
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export default commentSlice.reducer;
export const { createComment, deleteComment } = commentSlice.actions;
