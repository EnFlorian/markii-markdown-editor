import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { markdown } from "../data";
import { IFilesState } from "../types/state";

const initialState: IFilesState = {
  files: [],
  isLoading: false,
  openFile: {
    id: uuid(),
    name: "Untitled",
    content: markdown,
    dateCreated: Date.now(),
  },
};

export const filesSlice = createSlice({
  name: "files",
  initialState: initialState,
  reducers: {
    addFile: (state, action) => {
      state.files.push(action.payload);
      state.openFile = initialState.openFile;
    },
    removeFile: (state, action) => {
      state.files = state.files.filter((file) => file.id !== action.payload.id);
    },
    setOpenFile: (state, action) => {
      state.openFile = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    newFile: (state) => {
      state.openFile = {
        id: uuid(),
        name: "Untitled",
        content: "",
        dateCreated: Date.now(),
      };
    },
  },
});

export const { addFile, removeFile, setOpenFile, setIsLoading, newFile } = filesSlice.actions;
export default filesSlice.reducer;
