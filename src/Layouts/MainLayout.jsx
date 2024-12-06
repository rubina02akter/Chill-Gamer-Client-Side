import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
     <Navbar></Navbar>
     <div className="min-h-[calc(100vh-232px)]  container mx-auto ">
        <Outlet></Outlet>
      </div>
     <Footer></Footer>
    </div>
  );
};

export default MainLayout;