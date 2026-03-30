import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Testimonials from './Testimonial';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-orange-500">
      <Navbar />
      <main>{children}</main>
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default Layout;