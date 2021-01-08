import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h4>No products found.</h4>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((product) => {
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          amount={product.amount}
          price={product.price}
          slug={product.slug}
        />;
      })}
    </ul>
  );
};

export default ProductsList;
