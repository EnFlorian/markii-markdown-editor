import "./Editor.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { setOpenFile } from "../../state/FilesSlice";
import { setIsEditorFullScreen } from "../../state/UISlice";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useDispatch } from "react-redux";

const Editor = () => {
  const isEditorFullScreen = useSelector((state: RootState) => state.ui.isEditorFullScreen);
  const openFile = useSelector((state: RootState) => state.files.openFile);
  const dispatch = useDispatch();

  const handleFileContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const file = { ...openFile, content: e.target.value };
    dispatch(setOpenFile(file));
  };

  const handleFullScreenToggle = () => {
    dispatch(setIsEditorFullScreen(!isEditorFullScreen));
  };

  return (
    <main className="editor">
      <section className="editor__header-bar">
        <h2 className="editor__title">Markdown</h2>
        <button className="editor__visibility-button" onClick={handleFullScreenToggle}>
          {isEditorFullScreen ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </section>
      <textarea value={openFile.content} className="editor__content" onChange={handleFileContentChange}></textarea>
    </main>
  );
};

export default Editor;
