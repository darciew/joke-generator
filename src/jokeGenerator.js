import React from "react";
import Joke from "./joke";

export default class JokeGenerator extends React.Component {
  state = {
    joke: null,
    loading: false
  };

  loadJoke = async () => {
    this.setState({ loading: true });
  }

  render() {
    const { joke, loading } = this.state;

    return (
      <React.Fragment>
        {!joke && !loading && <div>You have not loaded any joke yet!</div>}
        {loading && <div>Funny is loading...</div>}

        <button onClick={this.loadJoke} type="button">
          Load a random joke
        </button>
      </React.Fragment>
    );
  }
}
