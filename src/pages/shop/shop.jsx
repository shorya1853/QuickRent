import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
// import { useEffect, useContext } from "react";
// import { UserContext } from "../../context/user-context";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
