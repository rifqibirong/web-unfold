// import ReactDOM from "react-dom/client";
import React from "react";
import Layout from "./Layout";
import Portofolio from "./page/Portofolio";
import Contact from "./page/Contact";
import About from "./page/About";
import Nopage from "./page/Nopage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
