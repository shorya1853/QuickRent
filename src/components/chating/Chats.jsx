import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../pages/Auth/firebase.config";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { userdata } = useContext(UserContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      console.log(userdata.uid)
      const unsub = onSnapshot(doc(db, "userChats", userdata.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    userdata.uid && getChats();
  }, [userdata.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
