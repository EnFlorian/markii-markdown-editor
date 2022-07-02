import { useFilesContext } from "../../state/FilesContext";
import FileCard from "../FileCard/FileCard";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import "./Sidebar.scss";
const Sidebar = () => {
  const { openFile } = useFilesContext();
  return (
    <aside className="sidebar">
      <section className="sidebar__top-content">
        <h1 className="sidebar__title">Markii</h1>
        <h2 className="sidebar__subtitle">Your Documents</h2>
        <button className="sidebar__new-file-button">New Document</button>
        <ul className="sidebar__files">
          <FileCard {...openFile} />
          <FileCard {...openFile} />
          <FileCard {...openFile} />
          <FileCard {...openFile} />
          <FileCard {...openFile} />
        </ul>
      </section>
      <section className="sidebar__bottom-content">
        <span className="sidebar__switch">
          <ThemeSwitch />
        </span>
      </section>
    </aside>
  );
};

export default Sidebar;
