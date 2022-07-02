import { AiOutlineFile } from "react-icons/ai";
import { useFilesContext } from "../../state/FilesContext";
import "./FileCard.scss";
const FileCard = (file: IFile) => {
  const { name, dateCreated } = file;
  const { setOpenFile } = useFilesContext();

  return (
    <section className="file-card" onClick={() => setOpenFile(file)}>
      <AiOutlineFile className="file-card__icon" />
      <div className="file-card__info">
        <p className="file-card__date">{new Date(dateCreated).toISOString().split("T")[0]}</p>
        <p className="file-card__name">{name}.md</p>
      </div>
    </section>
  );
};

export default FileCard;
