import { screen, render } from '@testing-library/react';
import App from './App';

test('Home', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
