import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="frame limit-width">
        <Link to="/">
          <h1>DEMO Streaming</h1>
        </Link>
        <div className="navbar-btn">
          <button className="navbar-btn-login">Log in</button>
          <button className="navbar-btn-cta">Start your free trail</button>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
