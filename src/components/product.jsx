import React, { useContext } from "react";
import { SetShopContext} from "../context/set-shop-context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { UserContext } from "../context/user-context";

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

  return (
    <div className="d-flex justify-content" >
      <Card className= "card" style={{ width: '18rem',  borderRadius: '0.2rem'}} >
      <Link to={`/product/${props.id}`}><Card.Img className= "card-img-top" variant="top" src={props.image}/></Link>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            ${props.price}
          </Card.Text>
          <Button variant="outline-primary" onClick={()=>CheckUser()}>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};