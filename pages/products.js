import React from "react";
import ProductsList from "../components/product/ProductsList";

const products = () => {
  const PRODUCTS = [
    {
      id: "p1",
      name: "Galaxy S7",
      amount: 0,
      price: 109.99,
      slug: "galaxy-s7",
      image: "galaxy-s7-image",
    },
  ];
  return (
    <div>
      <ProductsList items={} />
    </div>
  );
};

export default products;
