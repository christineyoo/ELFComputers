import React, { Component } from "react";
import TotalPrice from "../TotalPrice/TotalPrice";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class CartList extends Component {
  render() {
    // Your cart section
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <TotalPrice selected={this.props.selected} />
      </section>
    );
  }
}

export default CartList;
