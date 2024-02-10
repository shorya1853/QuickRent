import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/user-context";
import { Product } from "../../components/product";
// import { useEffect, useContext } from "react";
import "./shop.css";
import Crousel from "../../components/crousel";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { ProductContext } from "../../context/ProductContext";

export const Shop = () => {
  const { product } = useContext(ProductContext);

  return (
    <div className="shop" style={{margin: '100px 5px'}}>
      <div className="shopTitle">
        <Crousel />
      </div>
      {product? (
        <div className="Card-container">
            {product.map((product, i) => (
              <Product key={i} id={product.id}
                image={product.proImag}
                name={product.productName}
                price={product.price} />
            ))}
        </div>
      ) : (
        <Container>
          <Spinner />
        </Container>
      )}
    </div>
  );
};
