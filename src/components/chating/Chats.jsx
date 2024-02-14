// import { doc, onSnapshot } from "firebase/firestore";
// import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../../context/user-context";
// import { ChatContext } from "../../context/ChatContext";
// import { db } from "../../pages/Auth/firebase.config";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from "react-bootstrap/esm/Container";

// const Chats = () => {
//   const [chats, setChats] = useState([]);

//   const { userdata } = useContext(UserContext);
//   const { dispatch } = useContext(ChatContext);

//   useEffect(() => {
//     const getChats = async () => {
//       const unsub = onSnapshot(doc(db, "userChats", userdata.uid), (doc) => {
//         setChats(doc.data());
//       });

//       return () => {
//         unsub();
//       };
//     };

//     if (userdata && userdata.uid) {
//       getChats();
//     }
//   }, [userdata]);

//   const handleSelect = (u) => {
//     dispatch({ type: "CHANGE_USER", payload: u });
//   };
//
//   return (
//     <Container >
//       {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
//         <Container className= "shadow p-3 mb-5 bg-white rounded my-2" onClick={handleSelect}>
//           <Row>
//             <Col>
//               <img
//                 src={chat[1]?.userInfo.photoURL}
//                 className="rounded-circle"
//                 height="22"
//                 alt="Avatar"
//                 loading="lazy"
//               />
//             </Col>
//             <Col xs={6}>
//               {chat[1].userInfo.displayName}
//             </Col>
//             <Col >
//               hello
//             </Col>
//           </Row>

//         </Container>
//         // <div
//         //   className="userChat"
//         //   key={chat[0]}
//         //   onClick={() => handleSelect(chat[1].userInfo)}
//         // >
//         //   <img src={chat[1]?.userInfo.photoURL} alt="" />
//         //   <div className="userChatInfo">
//         //     <span>{chat[1].userInfo.displayName}</span>
//         //     <p>{chat[1].lastMessage?.text}</p>
//         //     <p>{new Date(chat[1].date?.seconds * 1000).toLocaleDateString()}</p>
//         //   </div>
//         // </div>
//       ))}
//     </Container>
//   );
// };

// export default Chats;
