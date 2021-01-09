import React from "react";
import ProductsList from "../components/product/ProductsList";

const products = () => {
  const PRODUCTS = [
    {
      id: "p1",
      name: "Nike Airforce 1",
      amount: 0,
      price: 99.99,
      slug: "nike-airforce-1",
      image: "/sneaker1.jpg",
      description:
        "This is to me one of the best nike sneaker air-soles of all time. I am a fan, big time. So next time you see me rocking a sneakers it should definitly be a nike airforce 1 07 triple white, hope you got it.",
    },
    {
      id: "p2",
      name: "Air Jordan 97",
      amount: 0,
      price: 199.99,
      slug: "air-jordan-97",
      image: "/sneaker2.jpg",
      description:
        "This is to me one of the best nike sneaker air-soles of all time. I am a fan, big time. So next time you see me rocking a sneakers it should definitly be a nike airforce 1 07 triple white, hope you got it.",
    },
    {
      id: "p3",
      name: "Nike Airmax 00",
      amount: 0,
      price: 139.99,
      slug: "nike-airmax-00",
      image: "/sneaker3.jpg",
      description:
        "This is to me one of the best nike sneaker air-soles of all time. I am a fan, big time. So next time you see me rocking a sneakers it should definitly be a nike airforce 1 07 triple white, hope you got it.",
    },
    {
      id: "p4",
      name: "Nike Airforce 1 high black",
      amount: 0,
      price: 179.99,
      slug: "nike-airforce-1-high-black",
      image: "/sneaker4.jpg",
      description:
        "This is to me one of the best nike sneaker air-soles of all time. I am a fan, big time. So next time you see me rocking a sneakers it should definitly be a nike airforce 1 07 triple white, hope you got it.",
    },
    {
      id: "p5",
      name: "Nike Airforce 1 white",
      amount: 0,
      price: 409.99,
      slug: "nike-airforce-1-white",
      image: "/sneaker5.jpg",
      description:
        "This is to me one of the best nike sneaker air-soles of all time. I am a fan, big time. So next time you see me rocking a sneakers it should definitly be a nike airforce 1 07 triple white, hope you got it.",
    },
    {
      id: "p6",
      name: "Nike Airmax 07",
      amount: 0,
      price: 109.99,
      slug: "nike-airmax-07",
      image: "/sneaker6.jpg",
      description:
        "This is to me one of the best nike sneaker air-soles of all time. I am a fan, big time. So next time you see me rocking a sneakers it should definitly be a nike airforce 1 07 triple white, hope you got it.",
    },
    {
      id: "p7",
      name: "Nike Airforce 1 red on white",
      amount: 0,
      price: 129.99,
      slug: "nike-airforce-1-red-on-white",
      image: "/sneaker7.jpg",
      description:
        "This is to me one of the best nike sneaker air-soles of all time. I am a fan, big time. So next time you see me rocking a sneakers it should definitly be a nike airforce 1 07 triple white, hope you got it.",
    },
    {
      id: "p8",
      name: "Air Jordan white on grey",
      amount: 0,
      price: 399.99,
      slug: "air-jordan-white-on-grey",
      image: "/sneaker8.jpg",
      description:
        "This is to me one of the best nike sneaker air-soles of all time. I am a fan, big time. So next time you see me rocking a sneakers it should definitly be a nike airforce 1 07 triple white, hope you got it.",
    },
  ];
  return (
    <div>
      <ProductsList items={PRODUCTS} />
    </div>
  );
};

export default products;
