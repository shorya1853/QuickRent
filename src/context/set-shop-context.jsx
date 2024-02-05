import { createContext, useState, useEffect, useContext } from "react";
import { ProductContext } from "./ProductContext";
import { UserContext } from "./user-context";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../pages/Auth/firebase.config";

export const SetShopContext = createContext(null);

export const SetShopContextProvider = (props) => {

  const { userAuth, userdata } = useContext(UserContext);
  const { product } = useContext(ProductContext);


  const getDefaultCart = async () => {
    let cart = {};
    const prolength = await product?.length;
    for (let i = 1; i < prolength + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  // const initialCart = getDefaultCart();
  // const initialCart = JSON.parse(localStorage.getItem("cartItems")) || getDefaultCart();
  const [Items, setItems] = useState();
  const [cartItems, setCartItems] = useState(null);



  useEffect(() => {
    const getUserCart = async () => {
      try {
        const userid = await userdata;
        const userRef = doc(db, 'cart', userid.uid);
        const docSnapshot = await getDoc(userRef);

        if (docSnapshot.exists()) {
          const cartData = docSnapshot.data().cartData;
          setCartItems(cartData);
        } else {
          console.log('No such document!');
          setCartItems(getDefaultCart());
        }
      } catch (error) {
        console.log('Error fetching user cart data:', error);
      }
    };

    getUserCart();
  }, [product, userAuth]);

  const addToCart = async (itemId) => {
    try {
      const userRef = doc(db, 'cart', userdata.uid);
      const currentCartData = cartItems;
      currentCartData[itemId] = (currentCartData[itemId] || 0) + 1;
      await setDoc(userRef, { cartData: currentCartData });
      setCartItems(currentCartData);
      alert("Item Added")
    } catch (error) {
      console.log('Error adding to cart:', error);
    }
  };


  const removeFromCart = async (itemId) => {
    try {
      const currentCartData = { ...cartItems };
      currentCartData[itemId] = (currentCartData[itemId] || 0) - 1;
      if (currentCartData[itemId] <= 0) {
        delete currentCartData[itemId];
      }
      const userRef = doc(db, 'cart', userdata.uid);
      await updateDoc(userRef, { cartData: currentCartData });
      setCartItems(currentCartData);
      alert("Item removed");
    } catch (error) {
      console.log('Error removing from cart:', error);
    }
  };
  

  const updateCartItemCount = (newAmount, itemId) => {
    setItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };


  const getTotalCartAmount = async () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = await product?.find((product) => product.proid === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }
    return totalAmount
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartItems,
    removeFromCart,
  };

  return (
    <SetShopContext.Provider value={contextValue}>
      {props.children}
    </SetShopContext.Provider>
  );
};
