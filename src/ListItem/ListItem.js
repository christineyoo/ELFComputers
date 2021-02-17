import React, { Component } from "react";
// Creates a string that is safe to use in both URLs and html attributes
import slugify from "slugify";

// This object converts numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const featuresArray = () => {
  Object.keys(this.props.features).map((feature) => {
  const options = () => {
    this.props.features[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === this.props.selected[feature].name}
            onChange={(e) => this.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });
  };
});  
} 

class ListItem extends Component {
  render() {
    return <>{this.options}</>;
  }
}

export default ListItem;
