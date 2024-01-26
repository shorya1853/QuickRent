import React from "react";
import all_products from "../../assets/Assets/all_product";
import { Product } from "../../components/product";
// import { useEffect, useContext } from "react";
import "./shop.css";
import Crousel from "../../components/crousel";

export const Shop = () => {

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>NIKHIlTech  Shop</h1>
      </div>
      <Crousel/>
      <div className="products">
        {all_products.map((item, i) => (
          <Product key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};
