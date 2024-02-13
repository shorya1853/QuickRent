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
import Products from "./pages/Products/Products";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar-test/Navbar-test";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbarlog /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Products/>}/>
          <Route element={<PrivateRoutes />}>
                <Route element={<Profile/>} path="/profile" exact/>
                <Route element={<Chating/>} path="/chats"/>
            </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
