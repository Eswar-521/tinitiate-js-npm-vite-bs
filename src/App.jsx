import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Forms from "./pages/Forms";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import DataTable from "./pages/DataTable";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Catalog from "./pages/CourseCatalog";
import ProductDetails from "./pages/ProductDetails";
import Comparison from "./pages/Comparison";
import Search from "./pages/Search";
import Comparisontable from "./pages/Comparisontable";

import Infographics from "./pages/Infographics";
import Audio from "./pages/Audio";
import Video from "./pages/Video";
import Animation from "./pages/Animation";
import DragDrop from "./pages/DragDrop";
import Editor from "./pages/Editor";
import ShoppingCart from "./pages/ShoppingCart";
import Calendar from "./pages/Calendar";


import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Security from "./pages/Security";

import Help from "./pages/Help";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home2" element={<Home2 />} />
        <Route path="/forms" element={<Forms />} />

        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="/datatable" element={<DataTable />} />

        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="comparison" element={<Comparison />} />
        <Route path="/comparisontable" element={<Comparisontable />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/infographics" element={<Infographics />} />
      <Route path="/audio" element={<Audio />} />
      <Route path="/video" element={<Video />} />

      <Route path="/animation" element={<Animation />} />
      <Route path="/dragdrop" element={<DragDrop />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/calendar" element={<Calendar />} />


      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/security" element={<Security />} />
      
      <Route path="/Help" element={<Help/>}/>      
    </Routes>
  );
};

export default App;
