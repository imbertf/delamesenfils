import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Pollux from "./pages/products/pollux";
import Apero from "./pages/products/apero";
import Stages from "./pages/stages";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import Partners from "./pages/partners";
import ScrollTopButton from "./components/Button/ScrollTopButton";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/couteaux" element={<Products />} />
        <Route path="/pollux" element={<Pollux />} />
        <Route path="/apero" element={<Apero />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partenaires" element={<Partners />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollTopButton />
    </BrowserRouter>
  );
};

export default App;
