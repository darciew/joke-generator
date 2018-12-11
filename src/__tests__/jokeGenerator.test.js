import React from "react";
import { render } from 'react-testing-library';
import Joke from "../joke";
import 'jest-dom/extend-expect';

test('Joke component receives props and then renders text', () => {
  const { getByTestId } = render(
    <Joke text="The funniest joke this year." />
  );

  expect(getByTestId('joke-text')).toHaveTextContent(
    "The funniest joke this year."
  );
});