import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user-context';
// import { UploadImages } from '../../methods/upload-images';
import Avatar from '../../components/Avatar';
import FormExample from '../../components/Form';
import Container from 'react-bootstrap/esm/Container';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { CiMenuKebab } from "react-icons/ci";
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile() {
    const { userdata, userproduct, deleteProduct} = useContext(UserContext);
    const [open, setOpen] = useState(false);
    return (
        <div style={{margin: '100px 50px'}}>
            <div>
                {userdata && (
                    <>
                        <div className="user">
                            <Avatar photoURL={userdata.photoURL} userName={userdata.displayName} />
                        </div>
                        {userproduct ? (
                            <Container className='row justify-content-md-center'>
                                {userproduct.map((product, i) => (
                                    <Col key={i} xs={12} sm={6} md={4} lg={3} className='col col-lg-2'>
                                        <Card style={{ width: '18rem', borderRadius: '0.2rem' }}>
                                            <Card.Img variant="top" src={product.proImag} />
                                            <Card.Body>
                                                <Card.Title>{product.productName}</Card.Title>
                                                <Card.Text>{product.productDescription}</Card.Text>
                                                <Card.Text>{product.category}</Card.Text>
                                                <Card.Text>{product.price}</Card.Text>
                                                <p>{product.id}</p>
                                                <Button variant="outline-primary" 
                                                onClick={()=>{
                                                    deleteProduct(product.id, product.proImag);
                                                }}>Delete porduct</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Container>
                        ) : (
                            // <Container>
                            //     <Spinner />
                            // </Container>
                            <p>no product add</p>
                        )}
                        <Container>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                Add Product
                            </Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                    <FormExample />
                                </div>
                            </Collapse>
                        </Container>
                    </>
                )}
            </div>
        </div>
    );
}

export default Profile