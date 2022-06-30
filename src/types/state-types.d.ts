interface IUIState {
  isLoading: boolean;
  isDarkMode: boolean;
  isSidebarOpen: boolean;
}

interface IUIContext extends IUIState {
  setIsLoading: (isLoading: boolean) => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

type UIActionType =
  | { type: "SET_IS_DARK_MODE"; payload: boolean }
  | { type: "SET_IS_SIDEBAR_OPEN"; payload: boolean }
  | { type: "SET_IS_LOADING"; payload: boolean };

interface IProps {
  children: React.ReactNode;
}
