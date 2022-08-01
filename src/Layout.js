import React from "react";
import "./Layout.css";
import Header from "./components/Header";
import Profil from "./components/Profil";
import Icon from "./components/Icon";
import Content from "./components/Content";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Profil />
      <Icon />
      <Content />
      <Footer />
    </>
  );
}

export default Layout;
