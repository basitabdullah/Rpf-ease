import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/ServicesPage/Services";
import Clients from "./pages/Clients/Clients";
import Schedule from "./pages/Schedule/Schedule";
import ContactUs from "./pages/ContactUs/Contact";
import "./styles/global.scss";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/ContactBtn/Contact";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <BrowserRouter>
    <Toaster/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourclients" element={<Clients />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Footer />
      <Contact />
    </BrowserRouter>
  );
};

export default App;
