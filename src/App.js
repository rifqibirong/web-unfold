// import ReactDOM from "react-dom/client";
import React from "react";
import Layout from "./Layout";
// import Portofolio from "./page/Portofolio";
import Contact from "./page/Contact2";
import About from "./page/About";
import Nopage from "./page/Nopage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaletteTheme from "./components/palette/ThemePalette";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
function App() {
  return (
    <BrowserRouter>
      <PaletteTheme>
        <Routes>
          <Route path="/" element={<Layout />} />
          {/* <Route path="/portofolio" element={<Portofolio />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </PaletteTheme>
    </BrowserRouter>
  );
}

export default App;
