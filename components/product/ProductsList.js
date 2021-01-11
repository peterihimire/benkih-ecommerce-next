import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = (props) => {
  console.log(props);
  console.log(props.items);
  if (props.items.length === 0) {
    return (
      <div>
        <h4>No products found.</h4>
      </div>
    );
  }
  return (
    <div className="productlist">
      <div className="productlist-center">
        {/* <ul> */}
        {props.items.map((product) => (
          // console.log(product)
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            amount={product.amount}
            price={product.price}
            slug={product.slug}
          />
        ))}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default ProductsList;
