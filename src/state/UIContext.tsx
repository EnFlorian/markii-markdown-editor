import { createContext, useContext, useReducer } from "react";
import reducer from "./reducers/UIReducer";

const initialState: IUIState = {
  isLoading: false,
  isDarkMode: false,
  isSidebarOpen: true,
  isEditorFullScreen: false,
  isModalOpen: false,
};

const UIContext = createContext<IUIContext>({
  ...initialState,
  setIsLoading: () => {},
  setIsDarkMode: () => {},
  setIsSidebarOpen: () => {},
  setIsEditorFullScreen: () => {},
  setIsModalOpen: () => {},
});

export const UIProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsLoading = (isLoading: boolean) => {
    dispatch({ type: "SET_IS_LOADING", payload: isLoading });
  };

  const setIsDarkMode = (isDarkMode: boolean) => {
    dispatch({ type: "SET_IS_DARK_MODE", payload: isDarkMode });
  };

  const setIsSidebarOpen = (isSidebarOpen: boolean) => {
    dispatch({ type: "SET_IS_SIDEBAR_OPEN", payload: isSidebarOpen });
  };

  const setIsEditorFullScreen = (isEditorFullScreen: boolean) => {
    dispatch({ type: "SET_IS_EDITOR_FULL_SCREEN", payload: isEditorFullScreen });
  };

  const setIsModalOpen = (isModalOpen: boolean) => {
    dispatch({ type: "SET_IS_MODAL_OPEN", payload: isModalOpen });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        setIsLoading,
        setIsDarkMode,
        setIsSidebarOpen,
        setIsEditorFullScreen,
        setIsModalOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  return useContext(UIContext);
};
