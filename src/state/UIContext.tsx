import { createContext, useContext, useReducer } from "react";
import reducer from "./reducers/UIReducer";

const initialState: IUIState = {
  isLoading: false,
  isDarkMode: false,
  isSidebarOpen: false,
};

const UIContext = createContext<IUIContext>({
  ...initialState,
  setIsLoading: () => {},
  setIsDarkMode: () => {},
  setIsSidebarOpen: () => {},
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

  return (
    <UIContext.Provider
      value={{
        ...state,
        setIsLoading,
        setIsDarkMode,
        setIsSidebarOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  return useContext(UIContext);
};
