import React from "react";

const ProductItem = (props) => {
  console.log(props.id);
  return (
    // <li>
      <article>
        <img src={props.image} alt={props.name} width='250px' height='250px' />
        <div className="">
          <h5>{props.name}</h5>
        </div>
      </article>
    // </li>
  );
};

export default ProductItem;
