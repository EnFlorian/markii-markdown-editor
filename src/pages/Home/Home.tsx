import { Editor, Preview, Header, Sidebar } from "../../components";
import "./Home.scss";
const Home = () => {
  return (
    <article className="home">
      <Sidebar />
      <main className="home__main-section">
        <Header />
        <section className="home__content-section">
          <Editor />
          <Preview />
        </section>
      </main>
    </article>
  );
};

export default Home;
