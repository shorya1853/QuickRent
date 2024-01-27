import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { CartItems } from "../../components/CartItems/CartItems";
export const Cart = () => {
  return (
   <CartItems/>
  );
};
