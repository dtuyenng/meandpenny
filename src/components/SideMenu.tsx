import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="small-menubar">
      <div className="menu-item">
        <Link className="links" to="/portfolios">
          <span className="material-symbols-outlined">gallery_thumbnail</span>
          <span className="menu-item-label">Portfolios</span>
        </Link>
      </div>
      <div className="menu-item">
        <Link className="links" to="/pricing">
          <span className="material-symbols-outlined">monetization_on</span>
          <span className="menu-item-label">Pricing</span>
        </Link>
      </div>
      <div className="menu-item">
        <Link className="links" to="/contact">
          <span className="material-symbols-outlined">mail</span>
          <span className="menu-item-label">Contact</span>
        </Link>
      </div>
      <div className="menu-item">
        <Link className="links" to="/aboutme">
          <span className="material-symbols-outlined">photo_camera_front</span>
          <span className="menu-item-label">About Me</span>
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
