import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout"; 
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Catalog from "./pages/CourseCatalog";
import ProductDetails from "./pages/ProductDetails";
import Comparison from "./pages/Comparison";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home2" element={<Home2 />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="comparison" element={<Comparison />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
