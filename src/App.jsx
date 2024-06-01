import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/ServicesPage/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import Clients from "./pages/Clients/Clients";
import Schedule from "./pages/Schedule/Schedule";
import ContactUs from "./pages/ContactUs/Contact";
import "./styles/global.scss";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services     />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourclients" element={<Clients />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
