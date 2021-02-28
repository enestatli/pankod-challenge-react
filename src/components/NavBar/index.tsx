import './styles.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrap">
        <div className="left">
          <h1>DEMO Streaming</h1>
        </div>

        <div className="right">
          <ul className="right">
            <li>
              <button>Log in</button>
            </li>
            <li>
              <button>Start your free trail</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
