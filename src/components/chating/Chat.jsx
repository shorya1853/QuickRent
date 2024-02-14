import React, { useContext, useState } from "react";
import { db } from "../../pages/Auth/firebase.config";
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../context/ChatContext";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Chat = ({ owner, userdata, productid }) => {
  const [open, setOpen] = useState(false);
  const { data } = useContext(ChatContext)
  const [user, setUser] = useState(null);



  const handleClick = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      userdata.uid > owner?.uid
        ? userdata.uid + owner?.uid
        : owner?.uid + userdata.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // Create a chat in the chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
      }

      // Reference to the document you want to update in the product collection
      const productRef = doc(db, "product", productid);

      // Update the "chats" field with the new chat ID
      await updateDoc(productRef, {
        chats: combinedId
      });

      // //create user chats
      // await updateDoc(doc(db, "userChats", userdata.uid), {
      //   [combinedId + ".userInfo"]: {
      //     uid: user.uid,
      //     displayName: user.displayName,
      //     photoURL: user.photoURL,
      //   },
      //   [combinedId + ".date"]: serverTimestamp(),
      // });

      // await updateDoc(doc(db, "userChats", user.uid), {
      //   [combinedId + ".userInfo"]: {
      //     uid: userdata.uid,
      //     displayName: userdata.displayName,
      //     photoURL: userdata.photoURL,
      //   },
      //   [combinedId + ".date"]: serverTimestamp(),
      // });
    }
    catch (err) { }

    setUser(null);
  };

  return (
    <Container className="my-2">
      <Button
        onClick={() => setOpen(!open) && handleClick()}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Chat
      </Button>
      <Collapse in={open}>
        <div
          id="example-collapse-text">
          <Container style={{
            backgroundColor: '#f0f0f0',
            padding: '10px',
            borderRadius: '5px',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Row xs="auto">
              <Col>
                <Messages />
              </Col>
            </Row>
            <Row className="my-2">
              <Input owner={owner} />
            </Row>
          </Container>
        </div>
      </Collapse>
    </Container>

  );
};

export default Chat;
