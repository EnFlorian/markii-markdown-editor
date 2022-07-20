import { configureStore } from "@reduxjs/toolkit";
import filesReducer from "./FilesSlice";
import uiReducer from "./UISlice";

export const store = configureStore({
  reducer: {
    files: filesReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
