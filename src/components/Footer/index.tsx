import { Link } from 'react-router-dom';

import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="limit-width">
        <ul className="footer-top">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="#">Privacy and Policy</Link>
          </li>
          <li>
            <Link to="#">Collection Statement</Link>
          </li>
          <li>
            <Link to="#">Help</Link>
          </li>
          <li>
            <Link to="#">Manage Account</Link>
          </li>
        </ul>
        <p className="footer-copy">
          Copyright &copy; 2016 Demo Streaming. All Rights Reserved.
        </p>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <Link to="#">
              <img src="/facebook-white.svg" alt="facebook-logo" width="14px" />
            </Link>
            <Link to="#">
              <img src="/twitter-white.svg" alt="twitter-logo" width="30px" />
            </Link>
            <Link to="#">
              <img
                src="/instagram-white.svg"
                alt="instagram-logo"
                width="30px"
              />
            </Link>
          </div>

          <div className="footer-bottom-right">
            <Link to="#">
              <img src="/app-store.svg" alt="app-store-logo" width="135px" />
            </Link>
            <Link to="#">
              <img src="/play-store.svg" alt="play-store-logo" width="135px" />
            </Link>
            <Link to="#">
              <img
                src="/windows-store.svg"
                alt="windows-store-logo"
                width="110px"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
