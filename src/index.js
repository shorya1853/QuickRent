import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContextProvider } from "./context/user-context";
import { SetShopContextProvider } from "./context/set-shop-context";
import { ProductContextProvider } from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContextProvider>
    <UserContextProvider>
        <SetShopContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </SetShopContextProvider>
    </UserContextProvider>
  </ProductContextProvider>

);
