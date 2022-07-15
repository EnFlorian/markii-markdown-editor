import { useSelector } from "react-redux";
import { Editor, Preview, Header, Sidebar, DeleteModal } from "../../components";
import { RootState } from "../../state/store";
import "./Home.scss";
const Home = () => {
  const { isSidebarOpen, isEditorFullScreen, isModalOpen } = useSelector((state: RootState) => state.ui);

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
