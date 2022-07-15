import "./Header.scss";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { AiOutlineFile } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { setOpenFile, addFile, newFile } from "../../state/FilesSlice";
import { setIsModalOpen, setIsSidebarOpen } from "../../state/UISlice";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useDispatch } from "react-redux";

const Header = () => {
  const { isSidebarOpen } = useSelector((state: RootState) => state.ui);
  const openFile = useSelector((state: RootState) => state.files.openFile);
  const dispatch = useDispatch();

  const handleFileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = { ...openFile, name: e.target.value };
    dispatch(setOpenFile(file));
  };

  const handleFileSave = () => {
    dispatch(addFile(openFile));
    dispatch(newFile());
  };

  const handleSidebarToggle = () => {
    dispatch(setIsSidebarOpen(!isSidebarOpen));
  };

  const handleRemoveFile = () => {
    dispatch(setIsModalOpen(true));
  };

  return (
    <section className="header">
      <section className="header__left-content">
        <button className="header__sidebar-button" onClick={handleSidebarToggle}>
          {isSidebarOpen ? <IoCloseSharp /> : <IoMenu />}
        </button>
        <h1 className="header__title">MARKDOWN</h1>
        <form className="header__file-form">
          <AiOutlineFile className="header__file-icon" />
          <div className="header__file-container">
            <label className="header__file-label" htmlFor="file">
              Document Name
            </label>
            <input
              value={openFile.name}
              onChange={(e) => handleFileNameChange(e)}
              className="header__file-input"
              type="text"
              id="file"
              placeholder="Enter File Name..."
            />
          </div>
        </form>
      </section>
      <section className="header__right-content">
        <FaTrash className="header__delete-icon" onClick={handleRemoveFile} />
        <button className="header__save-button" onClick={handleFileSave}>
          <BiSave className="header__save-icon" />
          <p>Save Document</p>
        </button>
      </section>
    </section>
  );
};

export default Header;
