import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Replies = {
  replies: [],
};

export const repliesSlice = createSlice({
  name: "replies",
  initialState,
  reducers: {
    sendReply: (state, action: PayloadAction<ChatReply>) => {
      state.replies = [...state.replies, action.payload];
    },
  },
});

export const { sendReply } = repliesSlice.actions;
export default repliesSlice.reducer;
