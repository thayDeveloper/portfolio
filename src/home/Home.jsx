import Data from "./Data";
import "./home.css";
import Social from "./Social";
import ScrowDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>
          <Data />
        </div>
        <ScrowDown />
      </div>
    </section>
  );
};
export default Home;
