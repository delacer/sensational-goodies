import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Cakes" element={<Cakes />} />
          <Route path="/pages/Events" element={<Events />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/Contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
