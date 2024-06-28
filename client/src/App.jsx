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
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import ProposalPage from "./pages/ProposalPage/ProposalPage";
import ProposalTraining from "./pages/ProposalTraining/ProposalTraining";
const App = () => {
  //Used delay to see the Loader look temporarily
  //Not meant for production

  const [delay, setDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 4000);
  }, []);

  return (
    <>
      {delay ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <ScrollToTop>
            <Toaster />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/ourclients" element={<Clients />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/proposal-dev" element={<ProposalPage />} />
              <Route path="/proposal-training" element={<ProposalTraining />} />
            </Routes>
            <Footer />
            <Contact />
          </ScrollToTop>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
