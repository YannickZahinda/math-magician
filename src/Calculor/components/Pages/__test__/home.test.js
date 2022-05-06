import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../home';

describe('Calculator component test', () => {
  test('Renders', () => {
    const home = render(
      <Router>
        <Home />
      </Router>,
    );
    expect(home).toMatchSnapshot();
  });
});
