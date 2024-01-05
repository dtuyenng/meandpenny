import React from "react";

function SideMenu() {
  return (
    <div className="small-menubar">
      <div className="menu-item">
        <a href="">
          <span className="material-symbols-outlined">gallery_thumbnail</span>
          <span className="menu-item-label">Portfolios</span>
        </a>
      </div>
      <div className="menu-item">
        <a href="">
          <span className="material-symbols-outlined">monetization_on</span>
          <span className="menu-item-label">Pricings</span>
        </a>
      </div>
      <div className="menu-item">
        <a href="">
          <span className="material-symbols-outlined">mail</span>
          <span className="menu-item-label">Contact</span>
        </a>
      </div>
      <div className="menu-item">
        <a href="">
          <span className="material-symbols-outlined">photo_camera_front</span>
          <span className="menu-item-label">About Me</span>
        </a>
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
