import React from 'react'
import './RelatedProducts.css'
import { Product } from '../product'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

export const RelatedProducts = (props) => {
  const productd = props.product
  const {product} = useContext(ProductContext)
  const relatedProducts = product.filter((item) => item.category == productd.category && item.id != productd.id);
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {relatedProducts.map((product,i)=>{
                return <Product key={i} id={product.id}
                image={product.proImag}
                name={product.productName}
                price={product.price} />
            })}
        </div>
    </div>
  )
}
