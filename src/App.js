import "./App.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
  deleteObject,
} from "firebase/storage";
import { storage } from "../../QuickRent/src/firebase";
import { v4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavScroll from "./components/Navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";


function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  const deleteImage = (url) => {
    const imageRef = ref(storage, url.split("?")[0]); // Extract file path from URL
    deleteObject(imageRef).then(() => {
      const newImageUrls = imageUrls.filter((imgUrl) => imgUrl !== url);
      setImageUrls(newImageUrls);
      console.log("Image deleted from Firebase Storage");
    }).catch((error) => {
      console.error("Error deleting image:", error);
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Upload Image</button>
      {imageUrls.map((url) => (
        <div key={url}>
          <img src={url} alt="Uploaded Image" />
          <button onClick={() => deleteImage(url)}>Delete Image</button>
        </div>
      ))}
    </div>

    <div className="App2">
      <ShopContextProvider>
        <Router>
          <NavScroll />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
    </>
  );
}


export default App;
