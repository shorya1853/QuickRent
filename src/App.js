import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {
  return (
    <div className="App">
      <section id="header">
    <a href="#">
      <img src="Products/logo.png" className="logo" alt="" />
    </a>
    <div>
      <ul id="navbar">
        <li>
          <a className="active" href="index.html">
            Home
          </a>
        </li>
        <li>
          <a href="shop.html">Shop</a>
        </li>
        <li>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li id="lg-bag">
          <a href="cart.html">
           <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
          </a>
        </li>
        <a href="#" id="close">
          <FontAwesomeIcon icon="far fa-times-circle" />
        </a>
      </ul>
    </div>
    <div id="mobile">
      <a href="cart.html">
       <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
      </a>
      <i id="bar" className="fas fa-outdent" />
    </div>
  </section>
  <section id="hero">
    <h4>Trade-in-Offer</h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>Save more with coupons &amp; upto 70% off!</p>
    <button>Shop Now</button>
  </section>
  <section id="feature" className="section-p1">
    <div className="fe-box">
      <img src="Features/f1.png" alt="" />
      <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
      <img src="Features/f2.png" alt="" />
      <h6>Online Order</h6>
    </div>
    <div className="fe-box">
      <img src="Features/f3.png" alt="" />
      <h6>Save Money</h6>
    </div>
    <div className="fe-box">
      <img src="Features/f4.png" alt="" />
      <h6>Promotions</h6>
    </div>
    <div className="fe-box">
      <img src="Features/f5.png" alt="" />
      <h6>Happy Sell</h6>
    </div>
    <div className="fe-box">
      <img src="Features/f6.png" alt="" />
      <h6>F24/7 Support</h6>
    </div>
  </section>
  <section id="product1" className="section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Modern Design</p>
    <div className="pro-container">
      <div className="pro">
        <a href="sproduct.html" />
        <img src="Products/f1.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#050505" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/f2.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/f3.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/f4.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/f5.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/f6.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/f7.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/f8.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
    </div>
  </section>
  <section id="banner" className="section-m1">
    <h4>Repair Services</h4>
    <h2>
      Upto <span>70% Off</span> - All T-Shirts &amp; Accessories{" "}
    </h2>
    <button className="normal">Explore More</button>
  </section>
  <section id="product1" className="section-p1">
    <h2>New Arrivals</h2>
    <p>Summer Collection New Modern Design</p>
    <div className="pro-container">
      <div className="pro">
        <img src="Products/n1.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#050505" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/n2.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/n3.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/n4.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/n5.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/n6.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/n7.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i
            className="fa-solid fa-cart-shopping cart"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
      <div className="pro">
        <img src="Products/n8.jpg" alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-shirts</h5>
          <div className="star">
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <FontAwesomeIcon
            icon="fa-solid fa-cart-shopping"
            style={{ color: "#000000" }}
          />
        </a>
      </div>
    </div>
  </section>
  <section id="sm-banner" className="section-p1">
    <div className="banner-box">
      <h4>Crazy Deals</h4>
      <h2>Buy 1 Get 1 Free</h2>
      <span>The best classic dress is on sale at Cara</span>
      <button className="white">Learn More</button>
    </div>
    <div className="banner-box banner-box2">
      <h4>Spring/Summer</h4>
      <h2>Upcoming Season</h2>
      <span>The best classic dress is on sale at Cara</span>
      <button className="white">Collection</button>
    </div>
  </section>
  <section id="banner3">
    <div className="banner-box">
      <h2>SEASONAL SALE</h2>
      <h3>Winter Collection -50% OFF</h3>
    </div>
    <div className="banner-box banner-box2">
      <h2>NEW FOOTWEAR COLLECTION </h2>
      <h3>SPRING / SUMMER 2023</h3>
    </div>
    <div className="banner-box banner-box3">
      <h2>T-SHIRTS</h2>
      <h3>NEW TRENDY PRINTS</h3>
    </div>
  </section>
  <section id="newsletter" className="section-p1 section-m1">
    <div className="newstext">
      <h4>Sign Up For Newsletters</h4>
      <p>
        Get E-mail updates about our latest shop and{" "}
        <span>special offers.</span>
      </p>
    </div>
    <div className="form">
      <input type="text" placeholder="Your email address" />
      <button className="normal">Sign Up</button>
    </div>
  </section>
  
  <footer className="section-p1">
    <div className="col">
      <img className="logo" src="Products/logo.png" alt="" />
      <h4>Contact</h4>
      <p>
        <strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco
      </p>
      <p>
        <strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789
      </p>
      <p>
        <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
      </p>
      <div className="follow">
        <h4>Follow Us</h4>
        <div className="icon">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
          <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
          <FontAwesomeIcon icon="fa-brands fa-pinterest" />
          <FontAwesomeIcon icon="fa-brands fa-youtube" />
        </div>
      </div>
    </div>
    <div className="col">
      <h4>About</h4>
      <a href="#">About Us</a>
      <a href="#">Delivery Information</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms &amp; Conditions</a>
      <a href="#">Contact Us</a>
    </div>
    <div className="col">
      <h4>My Account</h4>
      <a href="#">Sign In</a>
      <a href="#">View Cart</a>
      <a href="#">My Wishlist</a>
      <a href="#">Track My Order</a>
      <a href="#">Help</a>
    </div>
    <div className="col install">
      <h4>Install App</h4>
      <p>From App Store Or Google Play</p>
      <div className="row">
        <img src="Pay/app.jpg" alt="" />
        <img src="Pay/play.jpg" alt="" />
      </div>
      <p>Secured Payment Gateways</p>
      <img src="Pay/pay.png" alt="" />
    </div>
    <div className="copyright">
      <p>Copyright © 2023, Arhaan etc - HTML CSS Ecommerce Website</p>
    </div>
  </footer>
</div>
  )
}


export default App;
