import React, { useContext, useEffect, useState } from 'react'
import { db } from '../Auth/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../../components/Breadcrums'
import { ProductDisplay } from '../../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../../components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../../components/RelatedProducts/RelatedProducts';
import Container from 'react-bootstrap/esm/Container';
import Spinner from 'react-bootstrap/Spinner';
import { ProductContext } from '../../context/ProductContext';
import Chat from '../../components/chating/Chat';
import { UserContext } from '../../context/user-context';
import { ChatContext } from '../../context/ChatContext';


const Products = () => {
    const { product } = useContext(ProductContext);
    const { productId } = useParams();
    const [proid, setproid] = useState(null);
    const [owner, setowner] = useState(null)
    const { userdata, userAuth } = useContext(UserContext);
    const {dispatch} = useContext(ChatContext);
    useEffect(() => {
        const waitproduct = async () => {
            const profil = await product?.find((e) => e.id === productId);
            setproid(profil);
            const docRef = doc(db, "users", profil.ownerId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const productData = docSnap.data()
                setowner(productData);
            } else {
                console.log("No such document!");
            }
        // dispatch({type: "CHANGE_USER", payload: })
        }
        waitproduct();
    }, [product, productId])

    return (
        <div className='my-2'>
            {proid ? (
                <div>
                    <Breadcrums product={proid} />
                    <ProductDisplay product={proid} />
                    {/* {userAuth ? (
                        userdata.uid === proid.ownerId ? (
                            "Your product"
                        ) : (
                            // <Chat owner={owner} userdata={userdata} productid={proid} />
                            <button>Chat with owner</button>
                        )
                    ) : (
                        "Login to chat"
                    )} */}
                    <DescriptionBox />
                    <RelatedProducts product={proid} />
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