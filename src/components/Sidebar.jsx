import React from "react";
import Chats from "./chating/Chats";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;
