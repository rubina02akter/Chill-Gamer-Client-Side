
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';


const MainLayout = () => {




  return (
    <div className='font-serif'>
      {/* Sticky Navbar */}
      <div className=" sticky top-0 bg-transparent z-50 bg-opacity-60 backdrop-blur-md shadow-md">
        <Navbar />
      </div>
  
      {/* Main content with padding to avoid overlap */}
      <div className="min-h-[calc(100vh-232px)] container mx-auto ">
        <Outlet />
      </div>
  
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;