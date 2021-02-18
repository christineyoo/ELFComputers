import React, { Component } from "react";
import Features from "../Features.js";
import slugify from "slugify";

// This object converts numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class ListItem extends Component {
  render() {
    const features = Object.keys(Features).map((feature) => {
      Features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.selected[feature].name}
              onChange={(e) => this.props.OnUpdateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });
    });
    return <>{features}</>;
  }
}

export default ListItem;
