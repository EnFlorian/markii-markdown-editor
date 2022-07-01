// UI
interface IUIState {
  isLoading: boolean;
  isDarkMode: boolean;
  isSidebarOpen: boolean;
  isEditorFullScreen: boolean;
}

interface IUIContext extends IUIState {
  setIsLoading: (isLoading: boolean) => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
  setIsEditorFullScreen: (isEditorFullScreen: boolean) => void;
}

type UIActionType =
  | { type: "SET_IS_DARK_MODE"; payload: boolean }
  | { type: "SET_IS_SIDEBAR_OPEN"; payload: boolean }
  | { type: "SET_IS_LOADING"; payload: boolean }
  | { type: "SET_IS_EDITOR_FULL_SCREEN"; payload: boolean };

interface IProps {
  children: React.ReactNode;
}

// Files

interface IFile {
  id: number;
  name: string;
  content: string;
  dateCreated: Date;
  isSelected: boolean;
}
interface IFilesState {
  files: IFile[];
  isLoading: boolean;
  openFile: IFile;
}

interface IFilesContext extends IFilesState {
  addFile: (file: IFile) => void;
  removeFile: (id: IFile) => void;
  setOpenFile: (file: IFile) => void;
  setIsLoading: (isLoading: boolean) => void;
  downloadFile: (file: IFile) => void;
}

type FilesActionType =
  | { type: "ADD_FILE"; payload: IFile }
  | { type: "REMOVE_FILE"; payload: IFile }
  | { type: "SET_OPEN_FILE"; payload: IFile }
  | { type: "SET_IS_LOADING"; payload: boolean }
  | { type: "DOWNLOAD_FILE"; payload: IFile };
