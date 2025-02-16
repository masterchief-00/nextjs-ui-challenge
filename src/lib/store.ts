import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./features/sidebar/sidebarSlice";
import { loadChatSlice } from "./features/messages/loadChatSlice";
import { repliesSlice } from "./features/messages/repliesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      sidebarOpener: sidebarSlice.reducer,
      activeChat: loadChatSlice.reducer,
      chatReply: repliesSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
