import React, { useContext } from "react";
import { SetShopContext} from "../context/set-shop-context";
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom'
import { UserContext } from "../context/user-context";
import './productCard/Card.css';





export const Product = (props) => {
  const { addToCart} = useContext(SetShopContext);
  const {userAuth} = useContext(UserContext);

  
  const CheckUser =()=>{
    if(userAuth){
      addToCart(props.id);
    }else{
      alert("Please signin")
    }
  }

  {/* <Card className= "card" style={{ width: '18rem',  borderRadius: '0.2rem'}} >
  <Link to={`/product/${props.id}`}><Card.Img className= "card-img-top" variant="top" src={props.image}/></Link>
  <Card.Body>
  <Card.Title>{props.name}</Card.Title>
  <Card.Text>
  ${props.price}
  </Card.Text>
  <Button variant="outline-primary" onClick={()=>CheckUser()}>Add to cart</Button>
  </Card.Body>
</Card> */}
return (
        
        <div className="Card">
        <div className="card">
        <div className="body">
          <div className="Image">
          <img className= "card-img-top" variant="top" src={props.image}/>
          </div>
          <p>{props.name}</p>
            ${props.price}
            <div className="footer">
            <p>{props.id}</p>
          </div>
          <Button className="add-card-btn" onClick={()=>CheckUser()}>Add to cart</Button>
        </div>
      </div>
       
      </div>
        
      
  
          );
        };
          

    
            
            
  
  
  
    
    
      