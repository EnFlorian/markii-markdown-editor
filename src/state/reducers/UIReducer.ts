const reducer = (state: IUIState, action: UIActionType) => {
  switch (action.type) {
    case "SET_IS_DARK_MODE":
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case "SET_IS_SIDEBAR_OPEN":
      return {
        ...state,
        isSidebarOpen: action.payload,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
