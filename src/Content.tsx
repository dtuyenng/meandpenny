import React from "react";
import SideMenu from "./SideMenu";
import Portfolio from "./Portfolio";
import AboutMe from "./components/AboutMe";

function Content() {
  return (
    <div id="content">
      <SideMenu />
      {/* <Portfolio /> */}
      <AboutMe></AboutMe>
    </div>
  );
}

export default Content;
