import { Board, Header, Sidebar } from "../../components";
import "./Home.scss";
const Home = () => {
  return (
    <article className="home">
      <Sidebar />
      <div className="home__main-section">
        <Header />
        <Board />
      </div>
    </article>
  );
};

export default Home;
