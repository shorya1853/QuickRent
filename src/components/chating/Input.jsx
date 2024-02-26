import React, { useContext, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoIosAttach } from "react-icons/io";
import { RiArrowDropRightLine } from "react-icons/ri";
import { UserContext } from "../../context/user-context";
import { ChatContext } from "../../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../pages/Auth/firebase.config";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Input = (props) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const owner = props.owner

  const { userdata } = useContext(UserContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: userdata.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: userdata.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", userdata.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <Container >
      <Row>
        <Col md="auto">
          <CiImageOn size={30}/>
          {/* <IoIosAttach size={30}/> */}
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          /></Col>
        <Col >
          <input type="text"
            placeholder={"Type a message to " + owner?.displayName}
            id="formControlLg"
            className="form-control form-control-lg"
            onChange={(e) => setText(e.target.value)}
            value={text} />
        </Col>
        <Col xs lg="1">
        <Button onClick={handleSend}><RiArrowDropRightLine size={30} /></Button>
        </Col>
      </Row>

    </Container>
  );
};

export default Input;
