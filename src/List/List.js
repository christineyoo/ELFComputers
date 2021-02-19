import React, { Component } from "react";
import ListItem from "../ListItem/ListItem";

class List extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <fieldset className="feature" >
            <ListItem
              onUpdateFeature={this.updateFeature}
              selected={this.props.selected}
            />
          </fieldset>
      </form>
    );
  }
}

export default List;
