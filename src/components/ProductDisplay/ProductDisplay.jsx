import React, { useContext } from 'react'
import './ProductDisplay.css'
import { IoIosStar,IoIosStarHalf } from "react-icons/io";
import { SetShopContext} from '../../context/set-shop-context'
import { Link } from 'react-router-dom';

export const ProductDisplay = (props) => {
    const {addToCart} = useContext(SetShopContext);
    const product = props.product
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.proImag} alt="" />
                <img src={product.proImag} alt="" />
                <img src={product.proImag} alt="" />
                <img src={product.proImag} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.proImag} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.productName}</h1>
            <div className="productdisplay-right-stars">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf />
                <p>{122}</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-new">${product.price}</div>
            </div>
            <div className="productdisplay-right-price-description">
                {product.productDescription}
            </div>
            <Link to="/chats">Chats</Link>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}
