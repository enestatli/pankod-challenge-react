import { Footer, Header, NavBar } from '../components';

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      <Header />

      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
