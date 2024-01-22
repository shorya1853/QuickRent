import React, { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../context/user-context";
import { ChatContext } from "../../context/ChatContext";

const Message = ({ message }) => {
  const { userdata } = useContext(UserContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === userdata.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === userdata.uid
              ? userdata.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
