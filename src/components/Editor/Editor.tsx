import "./Editor.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useUIContext } from "../../state/UIContext";
import { useFilesContext } from "../../state/FilesContext";

const Editor = () => {
  const { isEditorFullScreen, setIsEditorFullScreen } = useUIContext();
  const { openFile, setOpenFile } = useFilesContext();

  const handleFileContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const file = { ...openFile, content: e.target.value };
    setOpenFile(file);
  };

  const handleFullScreenToggle = () => {
    setIsEditorFullScreen(!isEditorFullScreen);
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
