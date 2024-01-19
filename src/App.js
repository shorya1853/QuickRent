import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavScroll from "./components/Navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import SignIn from "./pages/Auth/SingIn";
import SignUp from "./pages/Auth/SingUp";
import Profile from "./pages/Auth/Profile";

import { UserContextProvider } from "./context/user-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <UserContextProvider>
          <Router>
            <NavScroll/>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
        </UserContextProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
