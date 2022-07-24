import FileCard from "../FileCard/FileCard";
import { useSelector } from "react-redux";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import "./Sidebar.scss";
import { RootState } from "../../state/store";

const Sidebar = () => {
  const { files } = useSelector((state: RootState) => state.files);

  const cards = files.map((file) => <FileCard key={file.id} {...file} />);

  return (
    <aside className="sidebar">
      <section className="sidebar__top-content">
        <h1 className="sidebar__title">Markii</h1>
        <h2 className="sidebar__subtitle">Your Documents</h2>
        <ul className="sidebar__files">{cards}</ul>
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
