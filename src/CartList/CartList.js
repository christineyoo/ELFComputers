import React, { Component } from "react";
import TotalPrice from "../TotalPrice/TotalPrice";
import CartItem from "../CartItem/CartItem";

class CartList extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartItem selected={this.props.selected} />
        <TotalPrice selected={this.props.selected} />
      </section>
    );
  }
}

export default CartList;
