import { AiOutlineFile } from "react-icons/ai";
import "./FileCard.scss";
const FileCard = ({ name, dateCreated }: IFile) => {
  return (
    <section className="file-card">
      <AiOutlineFile className="file-card__icon" />
      <div className="file-card__info">
        <p className="file-card__date">{dateCreated.toDateString()}</p>
        <p className="file-card__name">{name}.md</p>
      </div>
    </section>
  );
};

export default FileCard;
