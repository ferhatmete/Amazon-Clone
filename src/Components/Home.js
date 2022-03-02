import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
import { v4 as uuidv4 } from "uuid";

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="home">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt="Amazon Banner"
        ></img>
        {/* Product id, title, price, rating, image */}
        <div className="home__row">
          <Product
            id={uuidv4()}
            title="Ninja Warrior Obstacle Course for Kids Slackline kit "
            price={63.72}
            rating={5}
            image="https://m.media-amazon.com/images/I/91GsztvFrgL._AC_SX425_.jpg"
          />
          <Product
            id={uuidv4()}
            title="Set of 3 Ivory Bath Towels, 100% Combed Cotton Bath Towels for Bathroom, Shower Towels 28x54"
            price={19.99}
            rating={4}
            image="	https://images-na.ssl-images-amazon.com/images/I/81gvXACNC8S.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={uuidv4()}
            title="BISSELL Little Green Multi-Purpose Portable Carpet and Upholstery Cleaner, 1400B"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/715shoBi24L._AC_SY450_.jpg"
          />
          <Product
            id={uuidv4()}
            title="Acer Nitro 5 AN517-54-79L1 Gaming Laptop | Intel Core i7-11800H | NVIDIA GeForce RTX 3050Ti Laptop GPU"
            price={1079.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81Ivn5DIxhL._AC_SX355_.jpg"
          />
          <Product
            id={uuidv4()}
            title="Lenovo Flex 5 Laptop, 14.0 FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage"
            price={599.99}
            rating={3}
            image="	https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={uuidv4()}
            title="Leisuit Rollaway Guest Bed Cot Fold Out Bed - Portable Folding Bed Frame with Thick Memory "
            price={203.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81RcDOAl1mL._AC_SY450_.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
