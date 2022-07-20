import { AiOutlineFile } from "react-icons/ai";
import "./FileCard.scss";
import { setOpenFile } from "../../state/FilesSlice";
import { useDispatch } from "react-redux";
import { IFile } from "../../types/state";

const FileCard = (file: IFile) => {
  const { name, dateCreated } = file;
  const dispatch = useDispatch();

  return (
    <section className="file-card" onClick={() => dispatch(setOpenFile(file))}>
      <AiOutlineFile className="file-card__icon" />
      <div className="file-card__info">
        <p className="file-card__date">{new Date(dateCreated).toISOString().split("T")[0]}</p>
        <p className="file-card__name">{name}.md</p>
      </div>
    </section>
  );
};

export default FileCard;
