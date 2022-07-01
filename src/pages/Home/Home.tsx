import { Editor, Preview, Header, Sidebar } from "../../components";
import { useUIContext } from "../../state/UIContext";
import "./Home.scss";
const Home = () => {
  const { isSidebarOpen, isEditorFullScreen } = useUIContext();
  return (
    <article className="home">
      {isSidebarOpen && <Sidebar />}
      <main className="home__main-section">
        <Header />
        <section className="home__content-section">
          <Editor />
          {!isEditorFullScreen && <Preview />}
        </section>
      </main>
    </article>
  );
};

export default Home;
