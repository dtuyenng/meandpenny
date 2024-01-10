import React from "react";
import SideMenu from "./SideMenu";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import Pricing from "./Pricing";
import Welcome from "./Welcome";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";

function Content() {
  return (
    <div id="content">
      <SideMenu />
      <Routes>
        <Route path="/index.html" element={<Welcome />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/portfolios" element={<Portfolio />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default Content;
