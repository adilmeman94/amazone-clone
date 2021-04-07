import React from "react";
import { products } from "../Products";

export default function ProductsSpecs(props) {
  console.log("ProductsSpecs props", props);

  let product = props.location.state;
  if (!product) {
    const { id } = props.match.params;
    product = products.find((item) => item.id === id);
  }

  return (
    <div>
      <img className="medium" src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <b>Price: </b>
        {product.price}
      </div>
      <h5>{product.brand}</h5>
      <p>{product.rating} star</p>
      <p>{product.numReviews} Review</p>
      <p>{product.description}</p>
    </div>
  );
}
