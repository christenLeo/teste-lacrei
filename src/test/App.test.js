import { render, screen } from '@testing-library/react';
import App from '../App/App';

test('Renders Page main title', () => {
  render(<App />);
  const title = screen.getByText('Cards and Timer');
  expect(title).toBeInTheDocument();
});

test('Renders boxes', () => {
  render(<App/>);
  const boxes = document.querySelectorAll('.boxes');
  expect(boxes[0]).toBeInTheDocument();
  expect(boxes[1]).toBeInTheDocument();
  expect(boxes[2]).toBeInTheDocument();
});
