import React from "react";
import styles from "./Header.module.css";
import MenuBar from "./MenuBar";

function Header() {
  return (
    <div id={styles.header}>
      <div id={styles.title}>Me and Penny</div>
      <div id={styles.subtitle}>
        Me and my camera, documenting our short existence on this planet...
      </div>
      <MenuBar></MenuBar>
    </div>
  );
}

export default Header;
