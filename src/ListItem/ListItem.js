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
      const options = Features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              // checked={item.name === this.state.selected[feature].name}
              // onChange={(e) => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return <div>{options}</div>;
    });

    return <>Render's return{features}</>;
  }
}

export default ListItem;

// const itemHash = slugify(JSON.stringify(item));
{
  /* <div key={itemHash} className="feature__item">
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
          </div> */
}

// const features = Object.keys(Features);
// const firstFeature = features[0];
// const secondFeature = features[1];
// const thirdFeature = features[3];
// const fourthFeature = features[4];
// const firstFeatureName = Features[firstFeature][0].name;
// const secondFeatureName = Features[firstFeature][1].name;

// const processorFeatures = () => {
//   return firstFeatureName + secondFeatureName;
// }
