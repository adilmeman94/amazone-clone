import React from "react";
import "./styles.css";

export default function ProductItem(props) {
  console.log("Prpdict Item props", props);

  const { product } = props;
  return (
    <div className="product-item">
      <img className="medium" src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <b>Price: </b>
        {product.price}
      </div>
      <h5>{product.brand}</h5>
    </div>
  );
}
