import React from "react";

function SideMenu() {
  return (
    <div className="small-menubar">
      <div className="menu-item">
        <span className="material-symbols-outlined">gallery_thumbnail</span>
      </div>
      <div className="menu-item">
        <span className="material-symbols-outlined">monetization_on</span>
      </div>
      <div className="menu-item">
        <span className="material-symbols-outlined">mail</span>
      </div>
      <div className="menu-item">
        <span className="material-symbols-outlined">photo_camera_front</span>{" "}
      </div>
    </div>
    // <div id="portfolioMenu">
    //   <label>Portfolios</label>
    //   <ul>
    //     <li className="portfolioMenuItem">Portraiture 1</li>
    //     <li className="portfolioMenuItem">Portraiture 2</li>
    //     <li className="portfolioMenuItem">Headshots</li>
    //   </ul>
    // </div>
  );
}

export default SideMenu;
