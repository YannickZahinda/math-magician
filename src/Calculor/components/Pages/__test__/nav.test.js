import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../../nav';

describe('Calculator component test', () => {
  test('Renders', () => {
    const nav = render(
      <Router>
        <NavBar />
      </Router>,
    );
    expect(nav).toMatchSnapshot();
  });
});
