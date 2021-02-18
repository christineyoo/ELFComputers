import React, { Component } from "react";
// Creates a string that is safe to use in both URLs and html attributes
import slugify from "slugify";

// This object converts numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class ListItem extends Component {
  render() {
    const myFunction = () => {
      const optionsArray = Object.values(this.props.features).map(
        (feature) => feature
      );
      for (let i = 0; i < optionsArray.length; i++) {
        for (let j = 0; j < optionsArray[i].length; j++) {
          const itemHash = slugify(JSON.stringify(optionsArray[i][j]));
          return (
            <div className="feature__item">
              <input type="radio" id={itemHash} className="feature__option" />
              <label htmlFor={itemHash} className="feature__label">
                {optionsArray[i][j].name} (
                {USCurrencyFormat.format(optionsArray[i][j].cost)})
              </label>
            </div>
          );
        }
      }
    };

    return <>{myFunction()}</>;
  }
}

export default ListItem;
