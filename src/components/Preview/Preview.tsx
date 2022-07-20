import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import "./Preview.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Preview = () => {
  const { openFile } = useSelector((state: RootState) => state.files);

  return (
    <section className="preview">
      <section className="preview__header-bar">
        <h2 className="preview__title">Preview</h2>
      </section>
      <ReactMarkdown className="preview__content" children={openFile.content} remarkPlugins={[remarkGfm]} />
    </section>
  );
};

export default Preview;
