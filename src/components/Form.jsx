import { useContext, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from 'react-router-dom';
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { storage, db } from '../pages/Auth/firebase.config';
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
  setDoc,
  collection
} from "firebase/firestore";
import { UserContext } from '../context/user-context';
import { v4 as uuid } from "uuid";
import { ProductContext } from '../context/ProductContext';

const Categories = {
  ELECTRONIC: "Electronic",
  SPORT_THINGS: "Sports things",
  HOME_APPLIANCES: "Home appliances"
};

function GridComplexExample() {
  const fileInputRef = useRef(null);

  const { userdata } = useContext(UserContext);
  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const { product } = useContext(ProductContext)

  const navigate = useNavigate();


  const createProduct = async (e) => {
    setLoading(true);
    e.preventDefault();
    const proImag = e.target[0].files[0];
    const productName = e.target[2].value;
    const productDescription = e.target[3].value;
    const price = e.target[5].value;
    const categories = e.target[4].value;
    try {
      const date = new Date().getTime();
      const storageRef = ref(storage, `${productName + date}`);

      await uploadBytesResumable(storageRef, proImag).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //update product
            const productid = uuid();
            const productDocRef = doc(db, "product", productid);

            console.log(product)
            // if (product) {

            //   await updateDoc(productDocRef, {
            //     products: arrayUnion({
            //       proid: productid,
            //       productName,
            //       productDescription,
            //       category: categories,
            //       ownerId: userdata.uid,
            //       date: Timestamp.now(),
            //       price: price,
            //       proImag: downloadURL,
            //     }),
            //   });
            // } else {
            //   //create Product on firestore
            await setDoc(doc(db, "product", productid), {
                proid: productid,
                productName,
                productDescription,
                category: categories,
                ownerId: userdata.uid,
                date: Timestamp.now(),
                price: price,
                proImag: downloadURL,
            });
            // }
            
            //create empty user chats on firestore
            // await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.error(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Form onSubmit={createProduct}>
        <Row className="mb-3" >
          <Form.Group as={Col} xs={10} controlId="formFile" className="mb-4">
            <Form.Label>Upload Product Image</Form.Label>
            <Form.Control type="file" ref={fileInputRef} />
          </Form.Group>

          <Container as={Col} className="mb-3">
            <CloseButton onClick={() => {
              if (fileInputRef.current) {
                fileInputRef.current.value = null;
              }
            }} />
          </Container>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Enter Product Name</Form.Label>
            <Form.Control type="text" placeholder="Product Name" />
          </Form.Group>

          {/* <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}
        </Row>

        {/* <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group> */}

        <Row className="mb-3">
          {/* <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group> */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

        </Row>

        <Form.Select aria-label="Default select example" className="mb-3">
          <option>Select category</option>
          <option value={Categories.ELECTRONIC}>{Categories.ELECTRONIC}</option>
          <option value={Categories.SPORT_THINGS}>{Categories.SPORT_THINGS}</option>
          <option value={Categories.HOME_APPLIANCES}>{Categories.HOME_APPLIANCES}</option>
        </Form.Select>

        <Form.Group controlId="formGridEmail" className="mb-3">
          <Form.Label>Enter price</Form.Label>
          <Form.Control type="number" placeholder="Product Name" />
        </Form.Group>

        <Button disabled={loading} variant="primary" type="submit" className="mb-3">
          Post Product
        </Button>
        {loading && "Uploading and compressing the image please wait..."}
        {err && <span>Something went wrong</span>}
      </Form>
    </Container >
  );
}

export default GridComplexExample;