import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

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
