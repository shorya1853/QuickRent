import React, { useContext, useEffect, useState } from 'react'
import { SetShopContext } from '../../context/set-shop-context'
import { CiCircleRemove } from "react-icons/ci";
import './CartItems.css'
import { ProductContext } from '../../context/ProductContext';

export const CartItems = () => {
    const { removeFromCart, cartItems, getTotalCartAmount } = useContext(SetShopContext);
    const { product } = useContext(ProductContext);
    const [totalAmount, setTotalAmount] = useState(null);
    useEffect(() => {
        const promise = getTotalCartAmount();
        promise.then((result) => {
            setTotalAmount(result);
        }).catch((error) => {
            console.error('Error fetching total amount:', error);
        });
    }, [cartItems])

    return (
        <div className='cartitems'>
            {product?.map((e) => {
                const items = cartItems ? cartItems[e.proid] : 0;

                if (items > 0) {
                    return (
                        <div key={e.proid}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.proImag} alt="" className='carticon-product-icon' />
                                <p>{e.productName}</p>
                                <p>${e.price}</p>
                                <button className='cartitems-quantity'>{items}</button>
                                <p>${e.price * items}</p>
                                <CiCircleRemove size={40} onClick={() => {
                                    removeFromCart(e.proid);
                                }} />
                            </div>
                            <hr />
                        </div>
                    );
                }

                return null;
            })}
            <div>
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${totalAmount}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${totalAmount}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
        
    )
}
