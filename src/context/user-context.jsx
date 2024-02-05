import { createContext, useState, useEffect, useContext} from "react";
import { db } from "../pages/Auth/firebase.config";
import {doc, getDoc, deleteDoc} from 'firebase/firestore';
import { auth, storage } from "../pages/Auth/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ref, deleteObject } from 'firebase/storage';
import { ProductContext } from "./ProductContext";


export const UserContext = createContext(null);


export const UserContextProvider = (props) => {

    const [userdata, setUserdata] = useState(null);
    const [userAuth, setUserAuth] = useState(null);
    const [userproduct, setuserproduct] = useState(null);
    const { product } = useContext(ProductContext);
    // const [user, setUser] = useState('');

    useEffect(() => {
      onAuthStateChanged(auth, (user)=> {
        if(user){
          setUserAuth(true)
          fetchUserPost(user.uid)

        }
        else {
          console.log('No user found');
          setUserAuth(false);
        }
      })
    }, [userAuth, product])

    const fetchUserPost = async (userUid) => {
        try {
            const userRef = doc(db, 'users', userUid);
            const docSnapshot = await getDoc(userRef);
    
            if (docSnapshot.exists()) {
                const newData = { ...docSnapshot.data(), id: docSnapshot.id };
                setUserdata(newData);
                fetchProduct(userUid);
                
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.log('Error fetching user data:', error);
        }
        

    };

    const fetchProduct = async (userUid) => {
      try {
          if (userUid) {
            const userProduct = await product?.filter((item) => item.ownerId == userUid);
            setuserproduct(userProduct);
          } else {
              console.log('no product found!');
          }
      } catch (error) {
          console.log('Error fetching user data:', error);
      }
  }

  const deleteProduct = async (productid, image) => {
    try {
      // Delete product document from Firestore
      const productDocRef = doc(db, 'product', productid);
      await deleteDoc(productDocRef);
      const imageRef = ref(storage, image.split("?")[0]);
      await deleteObject(imageRef)
  
      console.log("Product deleted");
    } catch (error) {
      console.error("Error deleting product and image:", error);
    }
  };

    const LogOut = async () => {
      try {
        await signOut(auth)
        setUserAuth(false)
        
        alert("signOut successfully")
      } catch (err) {
        console.error(err)
      }
    }

      const contextValue = {
        userproduct,
        userdata,
        userAuth,
        fetchUserPost, 
        LogOut,
        deleteProduct,
      }

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}