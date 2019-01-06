import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Counter extends Component {
  state = {
    count: 1,
    names: ["Ruby Zozzle", "Tart N Juicy", "Hamms"],
    brewers: ["Hi-Wheel", "Epic", "Miller/Coors"]
  };

  // constructor() {
  //   super();
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

  handleDecrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.disableButton()}</span>
        <button
          onClick={() => this.handleDecrement({ id: 1 })}
          className="btn btn-primary"
        >
          Order
        </button>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Brewer</th>
              <th scope="col">Description</th>
              <th scope="col">ABV</th>
            </tr>
          </thead>
          <tbody>
            {this.state.brewers.map(brewer => (
              <tr key={brewer}>{brewer}</tr>
            ))}
          </tbody>
        </table>
        Favorite Food: <FontAwesomeIcon icon="igloo" />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  disableButton() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
