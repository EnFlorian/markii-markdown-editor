import { createContext, useContext, useReducer } from "react";
import reducer from "./reducers/FilesReducer";

const initialState: IFilesState = {
  files: [],
  isLoading: false,
  openFile: {
    id: 1,
    name: "Untitled",
    content: "",
    dateCreated: new Date(),
    isSelected: true,
  },
};

const FilesContext = createContext<IFilesContext>({
  ...initialState,
  addFile: () => {},
  removeFile: () => {},
  setIsLoading: () => {},
  setOpenFile: () => {},
  downloadFile: () => {},
  changeFile: () => {},
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

  const downloadFile = (file: IFile) => {
    dispatch({ type: "DOWNLOAD_FILE", payload: file });
  };

  const changeFile = (file: IFile) => {
    dispatch({ type: "CHANGE_FILE", payload: file });
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
        changeFile,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};

export const useFilesContext = () => {
  return useContext(FilesContext);
};
