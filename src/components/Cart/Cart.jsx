import React from "react";
import "./Cart.css";
import Button from "../Button/Button";

function Cart({ cartItems, onCheckout }) {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="cart">
      <p>Umumiy narx: {totalPrice}</p>

      <Button
        title={cartItems.length == 0 ? "Buyurtma" : "To'lov"}
        type={"checkout"}
        disable={cartItems.length == 0 ? true : false}
        onClick={onCheckout}
      />
    </div>
  );
}

export default Cart;
