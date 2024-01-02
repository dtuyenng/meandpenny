import styles from "./GalleryItem.module.css";
function GalleryItem() {
  return (
    <div className={styles.galleryItemContainer}>
      <div className={styles.galleryInnerContainer}>
        <img
          className={styles.galleryPicture}
          src="/src/assets/GalleryPic.png"
          alt=""
          height="100"
          width="100"
        />
        <div className={styles.content}>
          <div className={styles.galleryItemNumber}>PR29090</div>
          <div className={styles.galleryItemPrice}>Price: $6.99</div>
        </div>
      </div>

      <div className={styles.galleryItemDesc}>
        Conklin Private Reserve Midnight Blue 60ml
      </div>
    </div>
  );
}

export default GalleryItem;
