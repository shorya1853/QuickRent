import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom'


export const Breadcrums = (props) => {
  const product = props.product
  return (
    <div className='breadcrum' style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "#5e5e5e",
      fontSize: "16px",
      fontWeight: '600',
      margin: "60px 170px",
      textTransform: "capitalize",
    }}>
      HOME <Link><IoIosArrowForward /></Link> SHOP <Link><IoIosArrowForward /></Link> {product.category} <Link><IoIosArrowForward /></Link> {product.name}
    </div>
  );
}
