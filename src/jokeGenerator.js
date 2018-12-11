import React from "react";

export default class JokeGenerator extends React.Component {
  state = {
    joke: null,
  };

  render() {
    const { joke } = this.state;

    return (
      <React.Fragment>
        {!joke && <div>You have not loaded any joke yet!</div>}
      </React.Fragment>
    );
  }
}
