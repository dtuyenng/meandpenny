import React from "react";
import styles from "./MenuBar.module.css";

function MenuBar() {
  return (
    <div id={styles.menuBar}>
      <div className={styles.menuItem}>
        <a href="">Portfolio</a>
      </div>
      <div className={styles.menuItem}>
        <a href="">About Me</a>
      </div>
      <div className={styles.menuItem}>
        <a href="">Contact Info</a>
      </div>
    </div>
  );
}

export default MenuBar;
