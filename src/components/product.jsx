import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


export const Product = (props) => {
  const { addToCart} = useContext(ShopContext);

  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
      <Link to={`/product/${props.id}`}><Card.Img variant="top" src={props.image}/></Link>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            ${props.new_price}
          </Card.Text>
          <Card.Text style={{textdecoration: 'line-through'}}>
            ${props.old_price}
          </Card.Text>
          <Button variant="outline-primary" onClick={() => addToCart(props.id)}>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};