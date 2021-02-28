import { CardList } from '../../components/CardList';

import './styles.css';

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="homepage">
      <CardList />
    </div>
  );
};

export default Home;
