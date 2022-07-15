// UI
interface IUIState {
  isLoading: boolean;
  isDarkMode: boolean;
  isSidebarOpen: boolean;
  isEditorFullScreen: boolean;
  isModalOpen: boolean;
}

interface IUIContext extends IUIState {
  setIsLoading: (isLoading: boolean) => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
  setIsEditorFullScreen: (isEditorFullScreen: boolean) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

type UIActionType =
  | { type: "SET_IS_DARK_MODE"; payload: boolean }
  | { type: "SET_IS_SIDEBAR_OPEN"; payload: boolean }
  | { type: "SET_IS_LOADING"; payload: boolean }
  | { type: "SET_IS_EDITOR_FULL_SCREEN"; payload: boolean }
  | { type: "SET_IS_MODAL_OPEN"; payload: boolean };

interface IProps {
  children: React.ReactNode;
}

// Files

interface IFile {
  id: string;
  name: string;
  content: string;
  dateCreated: number;
}
interface IFilesState {
  files: IFile[];
  isLoading: boolean;
  openFile: IFile;
}

type FilesActionType =
  | { type: "ADD_FILE"; payload: IFile }
  | { type: "REMOVE_FILE"; payload: IFile }
  | { type: "SET_OPEN_FILE"; payload: IFile }
  | { type: "SET_IS_LOADING"; payload: boolean }
  | { type: "DOWNLOAD_FILE"; payload: IFile }
  | { type: "NEW_FILE" };
