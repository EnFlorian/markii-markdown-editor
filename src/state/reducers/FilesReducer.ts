const reducer = (state: IFilesState, action: FilesActionType) => {
  switch (action.type) {
    case "ADD_FILE":
      return {
        ...state,
        files: [...state.files, action.payload],
      };
    case "REMOVE_FILE":
      return {
        ...state,
        files: state.files.filter((file) => file.id !== action.payload.id),
      };
    case "SET_OPEN_FILE":
      return {
        ...state,
        openFile: action.payload,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "DOWNLOAD_FILE":
      return {
        ...state,
        files: state.files.map((file) => (file.id === action.payload.id ? action.payload : file)),
      };
    default:
      return state;
  }
};

export default reducer;
