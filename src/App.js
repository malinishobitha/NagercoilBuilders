import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import Services from './components/services';
import Contact from './components/Contact';
import Projects from "./components/Projects";  
import About from './components/About';
import ConsultingPage from "./components/ConsultingPage";
import EstimatePage from "./components/Estimate";
import PlaningPage from "./components/Planing";
import ConstructionPage from './components/Construction';
import FlooringPage from './components/Flooring';
import PaintingPage from './components/Painting';
import ElevationPage from './components/Elevation';
import ElectricPage from './components/Electric';
import InteriorPage from './components/Interior';
import RenovationPage from './components/Renovation';
import CarpentryPage from "./components/Carpentary";
import InteriorworkPage from "./components/Interiorwork";
import EnquiryPage from "./components/Enquiryform";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path='/About' element={<About />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<Contact />} />  
        <Route path="/Projects" element={<Projects />} />  
        <Route path="/ConsultingPage" element={<ConsultingPage />} />  
        <Route path="/Estimate" element={<EstimatePage />} />  
        <Route path="/Planing" element={<PlaningPage />} />  
        <Route path="/Construction" element={<ConstructionPage />} />  
        <Route path="/Flooring" element={<FlooringPage />} />  
        <Route path="/Painting" element={<PaintingPage />} />  
        <Route path="/Elevation" element={<ElevationPage />} /> 
        <Route path="/Electric" element={<ElectricPage />} />  
        <Route path="/Interior" element={<InteriorPage />} />  
        <Route path="/Renovation" element={<RenovationPage />} />  
        <Route path="/Carpentary" element={<CarpentryPage />} />  
        <Route path="/Interiorwork" element={<InteriorworkPage />} />  
        <Route path="/Enquiryform" element={<EnquiryPage />} />  


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
