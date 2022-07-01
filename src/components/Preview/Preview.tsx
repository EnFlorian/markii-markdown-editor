import { useFilesContext } from "../../state/FilesContext";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import "./Preview.scss";

const Preview = () => {
  const { openFile, setOpenFile } = useFilesContext();

  return (
    <section className="preview">
      <section className="preview__header-bar">
        <h2 className="preview__title">Preview</h2>
      </section>
      {/* <section className="preview__content"> */}
      <ReactMarkdown className="preview__content" children={openFile.content} remarkPlugins={[remarkGfm]} />
      {/* </section> */}
    </section>
  );
};

export default Preview;
