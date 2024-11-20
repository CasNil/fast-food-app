import React from "react";
import Card from "./Card";

const ItemList = ({ addToOrder }) => {
  const menuItems = [
    {
      image: "https://via.placeholder.com/150",
      title: "Burger",
      description: "A delicious burger with all the fixings.",
      price: 79.99,
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Pizza",
      description: "A delicious burger with all the fixings.",
      price: 99.99,
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Fries",
      description: "A delicious burger with all the fixings.",
      price: 59.99,
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mt-5">Fast Food Menu</h1>
      <div className="row">
        {menuItems.map((item, index) => (
          <div className="col-md-4" key={index}>
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              cardStyle=""
              buttonAction={() => addToOrder(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
