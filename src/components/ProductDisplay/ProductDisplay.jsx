import React, { useContext } from 'react'
import './ProductDisplay.css'
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { SetShopContext } from '../../context/set-shop-context'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/user-context';


export const ProductDisplay = (props) => {
    const { addToCart } = useContext(SetShopContext);
    const { userdata,userAuth } = useContext(UserContext);
    const product = props.product

    const CheckUser =()=>{
        if(userAuth){
            addToCart(product.id) 
        }else{
          alert("Please signin")
        }
      }
    return (
        <div className='productdisplay my-2'>
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
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                    <p>{122}</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-new">${product.price}</div>
                </div>
                <div className="productdisplay-right-price-description">
                    {product.productDescription}
                </div>
                {userAuth ? (
                    userdata.uid == product.ownerId ?
                        <button>Edit</button> :
                        <div>
                            <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                            <button>Chat with owner</button>
                        </div>)
                         : (
                            <button onClick={() => { CheckUser() }}>ADD TO CART</button>
                         )}


                <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
                <p className='productdisplay-right-category'><span>Proid :</span>{product.proid}</p>
                {/* <p className='productdisplay-right-category'><span>ownerId :</span>{userdata.uid == product.ownerId ?"you are the owner": product.ownerId}</p> */}
            </div>
        </div>
    )
}
