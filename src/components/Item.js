import React from "react";
// import { useState } from "react/cjs/react.production.min";
// import ReactDOM from 'react-dom';

function Item({ name, category }) {

  const [isAdded, setIsAdded] = React.useState(false);
  // console.log(isAdded)

  
  function clickToCart(){
    setIsAdded(function(isAdded){   
      return !isAdded
    })
  }
    
  const cart = isAdded ? "in-cart" : "" ;
  const addBtn = isAdded ? "remove" : "add" ;
  const innerBtn = isAdded ? "Remove from Cart" : "Add to Cart" ;

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addBtn} onClick={clickToCart}>{innerBtn}</button>
    </li>
  );
}

export default Item;
