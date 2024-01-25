import "./style.scss";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import Navbarlog from "./components/Navbar";
import SignIn from "./pages/Auth/SingIn";
import SignUp from "./pages/Auth/SingUp";
import Profile from "./pages/Auth/Profile"
import Chating from "./pages/Auth/Chating";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarlog />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<PrivateRoutes />}>
                <Route element={<Profile/>} path="/profile" exact/>
                <Route element={<Chating/>} path="/chats"/>
            </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
