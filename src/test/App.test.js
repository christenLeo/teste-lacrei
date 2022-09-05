import { render, screen } from '@testing-library/react';
import App from '../App/App';

test('renders Page main title', () => {
  render(<App />);
  const title = screen.getByText('Cards and Timer');

  console.log(title);

  expect(title).toBeInTheDocument();
});

