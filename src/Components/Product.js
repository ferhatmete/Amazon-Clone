import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      // Run reducer.js
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="Product 1"></img>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
