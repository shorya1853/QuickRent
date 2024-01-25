import React from 'react'
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";
import { storage } from '../pages/Auth/firebase.config';
import { v4 } from "uuid";

// ... (other imports)

export const UploadImages = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => getDownloadURL(snapshot.ref))
      .then((url) => {
        setImageUrls((prev) => [...prev, url]);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
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
            <img src={url} alt={`Uploaded Image`} />
            <button onClick={() => deleteImage(url)}>Delete Image</button>
          </div>
        ))}
      </div>
    </>
  );
};
