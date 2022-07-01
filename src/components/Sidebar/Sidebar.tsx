import File from "../File/File";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="sidebar__top-content">
        <h1 className="sidebar__title">Markii</h1>
        <h2 className="sidebar__subtitle">Your Documents</h2>
        <ul className="sidebar__files">
          <File />
          <File />
          <File />
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
