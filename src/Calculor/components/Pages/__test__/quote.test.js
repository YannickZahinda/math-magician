import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Quotes from '../quote';
describe('Calculator component test', () => {
  test('Renders', () => {
    const quotes = render(
      <Router>
        <Quotes />
      </Router>,
    );
    expect(quotes).toMatchSnapshot();
  });
});