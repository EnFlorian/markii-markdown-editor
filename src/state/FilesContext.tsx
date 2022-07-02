import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducers/FilesReducer";

const initialState: IFilesState = {
  files: [],
  isLoading: false,
  openFile: {
    id: Date.now(),
    name: "Untitled",
    content: "",
    dateCreated: new Date(),
  },
};

const FilesContext = createContext<IFilesContext>({
  ...initialState,
  addFile: () => {},
  removeFile: () => {},
  setIsLoading: () => {},
  setOpenFile: () => {},
  downloadFile: () => {},
  newFile: () => {},
});

export const FilesProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const files: IFile[] = JSON.parse(localStorage.getItem("files") || "[]");
    files.map((file) => addFile(file));
  }, []);

  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(state.files));
  }, [state.files]);

  const addFile = (file: IFile) => {
    dispatch({ type: "ADD_FILE", payload: file });
  };

  const removeFile = (file: IFile) => {
    dispatch({ type: "REMOVE_FILE", payload: file });
    dispatch({ type: "NEW_FILE" });
  };

  const setIsLoading = (isLoading: boolean) => {
    dispatch({ type: "SET_IS_LOADING", payload: isLoading });
  };

  const setOpenFile = (file: IFile) => {
    console.log("setOpenFile", file);
    dispatch({ type: "SET_OPEN_FILE", payload: file });
  };

  const downloadFile = (file: IFile) => {
    dispatch({ type: "DOWNLOAD_FILE", payload: file });
  };

  const newFile = () => {
    dispatch({ type: "NEW_FILE" });
  };

  return (
    <FilesContext.Provider
      value={{
        ...state,
        addFile,
        removeFile,
        setIsLoading,
        setOpenFile,
        downloadFile,
        newFile,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};

export const useFilesContext = () => {
  return useContext(FilesContext);
};
