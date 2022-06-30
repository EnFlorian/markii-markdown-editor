import { createContext, useContext, useReducer } from "react";
import reducer from "./reducers/FilesReducer";

const initialState: IFilesState = {
  files: [],
  isLoading: false,
  openFile: null,
};

const FilesContext = createContext<IFilesContext>({
  ...initialState,
  addFile: () => {},
  removeFile: () => {},
  setIsLoading: () => {},
  setOpenFile: () => {},
  saveFile: () => {},
  downloadFile: () => {},
});

export const FilesProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFile = (file: IFile) => {
    dispatch({ type: "ADD_FILE", payload: file });
  };

  const removeFile = (file: IFile) => {
    dispatch({ type: "REMOVE_FILE", payload: file });
  };

  const setIsLoading = (isLoading: boolean) => {
    dispatch({ type: "SET_IS_LOADING", payload: isLoading });
  };

  const setOpenFile = (file: IFile) => {
    dispatch({ type: "SET_OPEN_FILE", payload: file });
  };

  const saveFile = (file: IFile) => {
    dispatch({ type: "SAVE_FILE", payload: file });
  };

  const downloadFile = (file: IFile) => {
    dispatch({ type: "DOWNLOAD_FILE", payload: file });
  };

  return (
    <FilesContext.Provider
      value={{
        ...state,
        addFile,
        removeFile,
        setIsLoading,
        setOpenFile,
        saveFile,
        downloadFile,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};

export const useFilesContext = () => {
  return useContext(FilesContext);
};
