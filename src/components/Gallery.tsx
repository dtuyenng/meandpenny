import React from "react";
import GalleryItem from "./GalleryItem";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </div>
  );
}

export default Gallery;
