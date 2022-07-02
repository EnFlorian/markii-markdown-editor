import { useFilesContext } from "../../state/FilesContext";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import "./Preview.scss";

const Preview = () => {
  const { openFile } = useFilesContext();

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
