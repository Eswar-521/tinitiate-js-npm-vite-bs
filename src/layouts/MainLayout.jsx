import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeftMenuBar from "../components/Leftsidebar";
import RightSidebar from "../components/Rightsidebar";

const MainLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        {/* Left Sidebar */}
        <div className="col-md-3 p-3 bg-light">
          <LeftMenuBar />
        </div>

        {/* Main Content (Includes Right Sidebar with Space) */}
        <div className="col-md-9 d-flex">
          <div className="flex-grow-1 p-3">
            <Outlet />
          </div>
          {/* Right Sidebar with Space */}
          <div className="col-md-3 p-3 bg-light d-flex flex-column">
            <RightSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
