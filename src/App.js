import React, { Component } from "react";
import "./App.css";
import List from "./List/List";
import NavBar from "./NavBar/NavBar";
import CartList from "./CartList/CartList";

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  // The function is responsible for updating the selected features
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <List
            onUpdateFeature={(feature, newValue) => this.updateFeature(feature, newValue)}
            selected={this.state.selected}
          />
          <CartList selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
