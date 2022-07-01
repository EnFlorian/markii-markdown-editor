import "./Header.scss";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { AiOutlineFile } from "react-icons/ai";
import { useFilesContext } from "../../state/FilesContext";
import { useState } from "react";
import { useUIContext } from "../../state/UIContext";

const Navbar = () => {
  const { openFile, addFile } = useFilesContext();
  const { isSidebarOpen, setIsSidebarOpen } = useUIContext();
  const [fileName, setFileName] = useState("Untitled");

  const handleFileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!openFile) return;
    setFileName(e.target.value);
    openFile.name = e.target.value;
  };

  const handleFileSave = () => {
    if (!openFile) return;
    addFile(openFile);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="header">
      <section className="header__left-content">
        <button className="header__sidebar-button" onClick={handleSidebarToggle}>
          {isSidebarOpen ? <IoCloseSharp /> : <IoMenu />}
        </button>
        <h1 className="header__title">MARKDOWN</h1>
        <form className="header__file-form">
          <span className="header__file-icon">
            <AiOutlineFile />
          </span>
          <div className="header__file-container">
            <label htmlFor="file">Document Name</label>
            <input
              value={fileName}
              onChange={(e) => handleFileNameChange(e)}
              className="header__file-input"
              type="text"
              id="file"
              placeholder="Enter File Name..."
            />
          </div>
        </form>
      </section>
    </section>
  );
};

export default Navbar;
