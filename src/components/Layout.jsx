import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="pt-5 pb-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
