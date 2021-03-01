import { Link } from 'react-router-dom';

import './styles.css';

interface IProps {
  title: string;
  url: string;
}

const Thumbnail: React.FC<IProps> = ({ title, url }) => {
  return (
    <Link to={`/${url}`} className="thumbnail">
      <div className="frame">
        <img src="/placeholder.png" alt="Movie sign" width="255px" />
        <h3>{title}</h3>
      </div>
      <p className="thumbnail-p">{title}</p>
    </Link>
  );
};

export { Thumbnail };
