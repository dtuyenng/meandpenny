import styles from "./App.module.css";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import GalleryItem from "./GalleryItem";
import Gallery from "./Gallery";

function App() {
  return (
    <div id={styles.App}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
      {/* <Gallery /> */}
    </div>
  );
}

export default App;
