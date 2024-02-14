import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { db } from "../../pages/Auth/firebase.config";
import { UserContext } from "../../context/user-context";
import Container from "react-bootstrap/esm/Container";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { userdata } = useContext(UserContext);

  // const handleSearch = async () => {
  //   const q = query(
  //     collection(db, "users"),
  //     where("displayName", "==", username)
  //   );

  //   try {
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       setUser(doc.data());
  //     });
  //   } catch (err) {
  //     setErr(true);
  //   }
  // };

  // const handleKey = (e) => {
  //   e.code === "Enter" && handleSearch();
  // };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      userdata.uid > user.uid
        ? userdata.uid + user.uid
        : user.uid + userdata.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

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
    } catch (err) {}

    setUser(null);
    setUsername("")
  };
  return (
    <Container className= "shadow p-3 mb-5 bg-white rounded">
        <input
        style={{ borderColor: 'none' }}
          type="text"
          placeholder="Find a user"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      {err && <span>User not found!</span>}
      {user && (
        // <div className="userChat" onClick={handleSelect}>
        //   <img src={user.photoURL} alt="" />
        //   <div className="userChatInfo">
        //     <span>{user.displayName}</span>
        //   </div>
        // </div>
        <Container  className= "shadow p-3 mb-5 bg-white rounded"   onClick={handleSelect} >
          <Row>
        <Col xs={6} md={4}>
        <img
              src={user.photoURL}
              className="rounded-circle"
              height="22"
              alt="Avatar"
              loading="lazy"
            />
        </Col>
        <Col xs lg="2">
          {user.displayName}
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
         
        </Container>
      )}
    </Container>
  );
};

export default Search;
