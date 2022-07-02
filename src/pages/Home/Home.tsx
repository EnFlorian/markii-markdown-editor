import { Editor, Preview, Header, Sidebar, DeleteModal } from "../../components";
import { useUIContext } from "../../state/UIContext";
import "./Home.scss";
const Home = () => {
  const { isSidebarOpen, isEditorFullScreen, isModalOpen } = useUIContext();
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
      {isModalOpen && <DeleteModal />}
    </article>
  );
};

export default Home;
