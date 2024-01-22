import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavScroll from "./components/Navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import SignIn from "./pages/Auth/SingIn";
import SignUp from "./pages/Auth/SingUp";
import Profile from "./pages/Auth/Profile";
import Chating from "./pages/Auth/Chating";



function App() {
  return (
    <div className="App">
          <Router>
            <NavScroll/>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/chats" element={<Chating/>} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
    </div>
    
  );
}

export default App;
