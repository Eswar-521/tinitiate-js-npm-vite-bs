import React from "react";
import Header from "../components/Header";
import Menubar from "../components/Menubar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Menubar />
      <Header />
      <div className="container text-center mt-4">
        <h2>Home Page</h2>
        <p>Welcome to our React Vite Bootstrap App.</p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
