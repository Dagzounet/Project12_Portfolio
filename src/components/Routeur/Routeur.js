import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from "../../pages/Home/Home";
import Error404 from "../../pages/Error404/Error404";

function Routeur() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routeur;
