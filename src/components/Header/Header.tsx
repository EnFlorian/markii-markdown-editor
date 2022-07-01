import "./Header.scss";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { AiOutlineFile } from "react-icons/ai";
import { useFilesContext } from "../../state/FilesContext";
import { useState } from "react";
import { useUIContext } from "../../state/UIContext";

const Navbar = () => {
  const { setOpenFile, openFile, addFile } = useFilesContext();
  const { isSidebarOpen, setIsSidebarOpen } = useUIContext();
  const [fileName, setFileName] = useState("Untitled");

  const handleFileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = { ...openFile, name: e.target.value };
    setOpenFile(file);
  };

  const handleFileSave = () => {
    if (!openFile) return;
    addFile(openFile);
    console.log("File saved");
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
    </section>
  );
};

export default Navbar;