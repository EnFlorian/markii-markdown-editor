import "./Editor.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useUIContext } from "../../state/UIContext";

const Editor = () => {
  const { isEditorFullScreen, setIsEditorFullScreen } = useUIContext();

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
      <section className="editor__content"></section>
    </main>
  );
};

export default Editor;
