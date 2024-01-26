import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../../components/Breadcrums'
import { ShopContext } from '../../context/shop-context';
import { ProductDisplay } from '../../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../../components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../../components/RelatedProducts/RelatedProducts';


const Products = () => {
    const { all_products } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_products.find((e) => e.id === Number(productId));
    return (
        <div>
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts product={product}/>
        </div>
    )
}

export default Products