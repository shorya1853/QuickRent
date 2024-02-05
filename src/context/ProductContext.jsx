import { createContext, useState, useEffect} from "react";
import { db } from "../pages/Auth/firebase.config";
import {collection, getDocs} from 'firebase/firestore';



export const ProductContext = createContext(null);

export const ProductContextProvider = (props) => {
    const [product, setproduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const productsCollectionRef = collection(db, 'product');
            const productsSnapshot = await getDocs(productsCollectionRef);
      
            if (!productsSnapshot.empty) {
              // If there are documents in the collection
              const productsData = productsSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              setproduct(productsData);
            } else {
              console.log('No products found!');
            }
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
      
        fetchProducts();
      }, []);
    

    const contexValue = {
        product
    }
  return (
    <ProductContext.Provider value={contexValue}>
        {props.children}
    </ProductContext.Provider>
  )
}
