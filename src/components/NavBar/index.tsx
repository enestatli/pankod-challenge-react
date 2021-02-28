import './styles.css';

const NavBar = () => {
  return (
    <div className="container">
      <div className="wrap">
        <div className="left">
          <h2>Demo Streaming</h2>
        </div>

        <ul className="right">
          <li>Login</li>
          <li>Start your free trail</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
