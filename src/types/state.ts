export interface IUIState {
  isLoading: boolean;
  isDarkMode: boolean;
  isSidebarOpen: boolean;
  isEditorFullScreen: boolean;
  isModalOpen: boolean;
}

export interface IUIContext extends IUIState {
  setIsLoading: (isLoading: boolean) => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
  setIsEditorFullScreen: (isEditorFullScreen: boolean) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export interface IProps {
  children: React.ReactNode;
}

export interface IFile {
  id: string;
  name: string;
  content: string;
  dateCreated: number;
}
export interface IFilesState {
  files: IFile[];
  isLoading: boolean;
  openFile: IFile;
}
