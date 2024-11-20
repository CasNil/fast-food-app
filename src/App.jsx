import React, { useState } from "react";
import ItemList from "./Components/ItemList";
import OrderList from "./Components/OrderList";

const App = () => {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    const existingItem = order.find((o) => o.title === item.title);
    if (existingItem) {
      setOrder(
        order.map((o) =>
          o.title === item.title ? { ...o, quantity: o.quantity + 1 } : o
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (title, quantity) => {
    if (quantity <= 0) {
      setOrder(order.filter((item) => item.title !== title));
    } else {
      setOrder(
        order.map((item) =>
          item.title === title ? { ...item, quantity } : item
        )
      );
    }
  };

  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <ItemList addToOrder={addToOrder} />
      <OrderList
      order={order}
      updateQuantity={updateQuantity}
      total={calculateTotal}
      />
    </>
  );
};

export default App;
