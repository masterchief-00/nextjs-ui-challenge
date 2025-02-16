import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CurrentChat = {
  currentChat: {
    id: null,
    photo: null,
    names: null,
    handle: null,
    tag: null,
    content: null,
    timestamp: null,
  },
};

export const loadChatSlice = createSlice({
  name: "loadchat",
  initialState,
  reducers: {
    setCurrentChat: (state, action) => {
      state.currentChat.id = action.payload.id;
      state.currentChat.photo = action.payload.photo;
      state.currentChat.names = action.payload.names;
      state.currentChat.handle = action.payload.handle;
      state.currentChat.tag = action.payload.tag;
      state.currentChat.timestamp = action.payload.timestamp;
      state.currentChat.content = action.payload.content;
    },
  },
});

export const { setCurrentChat } = loadChatSlice.actions;
export default loadChatSlice.reducer;
