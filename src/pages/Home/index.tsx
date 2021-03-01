import { Thumbnail } from "../../components";
import "./styles.css";

const Home = () => {
  return (
    <div className="homepage limit-width">
      <Thumbnail title="Movies" url="movies" />
      <Thumbnail title="Series" url="series" />
    </div>
  );
};

export default Home;
