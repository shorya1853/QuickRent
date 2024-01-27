import { createContext, useState, useEffect } from "react";
import all_products from "../assets/Assets/all_product"


export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < all_products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const initialCart = JSON.parse(localStorage.getItem("cartItems")) || getDefaultCart();
    const [cartItems, setCartItems] = useState(initialCart);


  useEffect(() => {
      // Update localStorage whenever cartItems change
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
  })


  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
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
    all_products,
    addToCart,
    updateCartItemCount,
    getTotalCartItems,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
