import React from 'react';
import * as axios from 'axios';
import { render, fireEvent, wait } from 'react-testing-library';
import Joke from '../joke';
import JokeGenerator from '../jokeGenerator';
import MockAxios from 'axios-mock-adapter';
import 'jest-dom/extend-expect';

const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });

test('Joke component receives props and then renders text', () => {
  const { getByTestId } = render(
    <Joke text="The funniest joke this year." />
  );

  expect(getByTestId('joke-text')).toHaveTextContent(
    "The funniest joke this year."
  );

});

test('JokeGenerator component fetches a random joke and renders it', async () => {
  mock.onGet().replyOnce(200, {
    value: {
      joke: "Hilarious Dad Joke"
    }
  })

  const { getByText, queryByText, queryByTestId } = render(<JokeGenerator />);

  expect(getByText("You have not loaded any joke yet!")).toBeInTheDocument();

  fireEvent.click(getByText("Load a random joke"));

  expect(queryByText("You have not loaded any joke yet!")).not.toBeInTheDocument();
  expect(queryByText("Funny is loading...")).toBeInTheDocument();

  await wait(() => expect(queryByText("Funny is loading...")).not.toBeInTheDocument());

  expect(queryByTestId("joke-text")).toBeInTheDocument();
});
