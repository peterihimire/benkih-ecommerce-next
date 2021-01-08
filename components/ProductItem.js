import React from "react";

const ProductItem = (props) => {
  console.log(props);
  return (
    <li>
      <article>
        <img src={props.image} alt={props.name} />
        <div className="">
          <h5>{props.name}</h5>
        </div>
      </article>
    </li>
  );
};

export default ProductItem;
