import React, { Component } from "react";
import ListItem from "../ListItem/ListItem";

class List extends Component {
  render() {
    const featuresArr = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}Hello</h3>
          </legend>
          <ListItem
              onUpdateFeature={this.updateFeature}
              features={this.props.features}
            />
        </fieldset>
      );
    });
    return (<>{featuresArr}</>)
  }
}

export default List;
