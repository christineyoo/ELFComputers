import React, { Component } from "react";
import ListItem from "../ListItem/ListItem";

class List extends Component {
  render() {
    const featuresKeyArr = Object.keys(this.props.features).map(
      (feature, idx) => {
        const featureHash = feature + "-" + idx;

        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <ListItem
              onUpdateFeature={this.updateFeature}
              features={this.props.features}
              selected={this.props.selected}
            />
          </fieldset>
        );
      }
    );
    return (
      <>
        <form className="main__form">
          <h2>Customize your laptop</h2>
          {featuresKeyArr}
        </form>
      </>
    );
  }
}

export default List;
