import React from "react";
import styles from "./Content.module.css";
import SideMenu from "./SideMenu";

function Content() {
  return (
    <div id={styles.main}>
      <SideMenu></SideMenu>
      <div id={styles.content}>Content</div>
    </div>
  );
}

export default Content;
