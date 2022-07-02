import "./Header.scss";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { AiOutlineFile } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { useFilesContext } from "../../state/FilesContext";
import { useUIContext } from "../../state/UIContext";
import { FaTrash } from "react-icons/fa";

const Header = () => {
  const { setOpenFile, openFile, addFile, removeFile } = useFilesContext();
  const { isSidebarOpen, setIsSidebarOpen } = useUIContext();

  const handleFileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = { ...openFile, name: e.target.value };
    setOpenFile(file);
  };

  const handleFileSave = () => {
    if (!openFile) return;
    addFile(openFile);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleRemoveFile = () => {
    if (!openFile) return;
    removeFile(openFile);
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
