import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChatContextProvider } from "./context/ChatContext";
import { UserContextProvider } from "./context/user-context";
import { ShopContextProvider } from "./context/shop-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    <UserContextProvider>
      <ChatContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChatContextProvider>
    </UserContextProvider>
  </ShopContextProvider>

);
