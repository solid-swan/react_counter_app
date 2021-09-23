import React, { Component } from "react";

class Counter extends Component {
  //   state is a property of react that is an object that includes any data that the component//
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        {/* brackets are used to render values dynamically */}
        <span className="badge badge-primary">{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
