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

const commentSlice = createSlice({
  name: "comments",
  initialState: initialCommentState,
  //   reducers: {
  //     getData: (state, action) => {
  //       state.loading = false;
  //     },
  //   },
  extraReducers: (builder) => {
    // builder.addCase(fetchComments.pending, (state, action) => {
    //   state.loading = true;
    // });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export default commentSlice.reducer;
// export const { getData } = commentSlice.actions;
