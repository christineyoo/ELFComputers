import React, { Component } from "react";
// Creates a string that is safe to use in both URLs and html attributes
import slugify from "slugify";

// This object converts numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});



  // const options = () => {
  //   this.props.features.map((item) => {
  //     const itemHash = slugify(JSON.stringify(item));
  //     return (
  //       <div key={itemHash} className="feature__item">
  //         <input
  //           type="radio"
  //           id={itemHash}
  //           className="feature__option"
  //           name={slugify()}
  //           checked={item.name === this.props.selected.name}
  //           onChange={(e) => this.updateFeature()}
  //         />
  //         <label htmlFor={itemHash} className="feature__label">
  //           {item.name} ({USCurrencyFormat.format(item.cost)})
  //         </label>
  //       </div>
  //     );
  //   });
  // };

class ListItem extends Component {
  render() {
  const featuresObj = this.props.features;
  const selectedObj = this.props.selected;
  const selectedArr = Object.keys(selectedObj).map(selection => selection.name);
  const options = Object.keys(featuresObj).map((feature, i) => 
   (
    <div key={i} className="feature__item">
      <input 
      type="radio"
      id={i}
      className="feature__option"
      name={slugify(feature)}
      checked={featuresObj[feature].name === selectedArr[i]}
      />
      <label htmlFor={i} className="feature__label">{featuresObj[feature].name} ({USCurrencyFormat.format(featuresObj[feature].cost)})</label>
    </div>
  ))
    return <>{options}</>;
  }
}

export default ListItem;
