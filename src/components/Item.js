import React from "react";
import { useState } from "react/cjs/react.production.min";

function Item({ name, category }) {

  // const [isAdded, setIsAdded] = useState(false);

  // const cart = isAdded ? "" : "in-cart" ;

  // function clickToCart(){
  //   setIsAdded((isAdded) => !isAdded);
  // }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" >Add to Cart</button>
    </li>
  );
}

export default Item;
