import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="firstRow">
          <ul>
            <li>Home </li>
            <li>|</li>
            <li>Terms and Conditions </li>
            <li>|</li>
            <li>Privacy and Policy </li>
            <li>|</li>
            <li>Collection Statement </li>
            <li>|</li>
            <li>Help </li>
            <li>|</li>
            <li>Manage Account </li>
          </ul>
          <p>Copyright ^C 2016 Demo Steraming. All Rights Reserved.</p>
        </div>

        <div className="secondRow">
          <div className="left">
            <ul>
              <li>
                <img src="/facebook-white.svg" alt="facebook-logo" />
              </li>
              <li>
                <img src="/twitter-white.svg" alt="twitter-logo" />
              </li>
              <li>
                <img src="/instagram-white.svg" alt="instagram-logo" />
              </li>
            </ul>
          </div>

          <div className="right">
            <ul>
              <li>
                <img src="/app-store.svg" alt="app-store-logo" />
              </li>
              <li>
                <img src="/play-store.svg" alt="play-store-logo" />
              </li>
              <li>
                <img src="/windows-store.svg" alt="windows-store-logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
