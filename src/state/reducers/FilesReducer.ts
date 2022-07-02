const reducer = (state: IFilesState, action: FilesActionType) => {
  switch (action.type) {
    case "ADD_FILE": {
      const formattedFile = {
        ...action.payload,
        name: action.payload.name.trim().replaceAll(" ", "-"),
        content: action.payload.content.trim(),
      };
      return {
        ...state,
        files: state.files.filter((file) => file.id !== formattedFile.id).concat(formattedFile),
      };
    }
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
    case "NEW_FILE":
      return {
        ...state,
        openFile: {
          id: state.files.length + 1,
          name: "Untitled",
          content: "",
          dateCreated: new Date(),
        },
      };

    default:
      return state;
  }
};

export default reducer;
