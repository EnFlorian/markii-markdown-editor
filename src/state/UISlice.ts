import { createSlice } from "@reduxjs/toolkit";
import { IUIState } from "../types/state";

export const initialUIState: IUIState = {
  isLoading: false,
  isDarkMode: true,
  isSidebarOpen: false,
  isEditorFullScreen: false,
  isModalOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    setIsSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    setIsEditorFullScreen: (state, action) => {
      state.isEditorFullScreen = action.payload;
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setIsLoading, setIsDarkMode, setIsSidebarOpen, setIsEditorFullScreen, setIsModalOpen } = uiSlice.actions;
export default uiSlice.reducer;
