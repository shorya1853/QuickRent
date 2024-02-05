import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../../components/Breadcrums'
import { ProductDisplay } from '../../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../../components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../../components/RelatedProducts/RelatedProducts';
import Container from 'react-bootstrap/esm/Container';
import Spinner from 'react-bootstrap/Spinner';
import { ProductContext } from '../../context/ProductContext';


const Products = () => {
    const { product } = useContext(ProductContext);
    const { productId } = useParams();
    const [proid, setproid] = useState(null);
    useEffect(() => {
        const waitproduct = async() => {
            const profil = await product?.find((e) => e.id === productId);
            setproid(profil);
        }
        waitproduct();
    }, [product, productId])

    return (
        <div>
            {proid ? (
                <div>
                    <Breadcrums product={proid} />
                    <ProductDisplay product={proid} />
                    <DescriptionBox />
                    <RelatedProducts product={proid}/>
                </div>
            ) : (
                <Container>
                    <Spinner />
                </Container>
            )}
        </div>
    )
}

export default Products