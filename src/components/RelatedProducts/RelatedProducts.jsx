import React from 'react'
import './RelatedProducts.css'
import { Product } from '../product'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const RelatedProducts = (props) => {
  const {all_products} = useContext(ShopContext)

  const {product} = props;
  const relatedProducts = all_products.filter((item) => item.name == product.name);

  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {relatedProducts.map((item,i)=>{
                return <Product key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
