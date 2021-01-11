import React from "react";

const ProductItem = (props) => {
  console.log(props.id);
  return (
    // <li>
      <article>
        <img src={props.image} alt={props.name} width='200px' height='200px' />
        <div className="">
          <h5>{props.name}</h5>
        </div>
      </article>
    // </li>
  );
};

export default ProductItem;
