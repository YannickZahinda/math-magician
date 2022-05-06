import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../../../calculor';

describe('Calculator component test', () => {
  test('Renders', () => {
    const calculator = render(
      <Router>
        <Calculator />
      </Router>,
    );
    expect(calculator).toMatchSnapshot();
  });
});
