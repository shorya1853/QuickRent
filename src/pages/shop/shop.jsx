import React ,{useEffect, useContext}from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
// import { useEffect, useContext } from "react";
import { UserContext } from "../../context/user-context";
import "./shop.css";
import Crousel from "../../components/crousel";

export const Shop = () => {

  const {fetchData, fetchUserPost} = useContext(UserContext);

  useEffect(()=> {
    fetchUserPost()
    fetchData();
  }, [])



  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>NIKHIlTech  Shop</h1>
      </div>
      <Crousel/>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
