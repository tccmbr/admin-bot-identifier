import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Identificador de Bot/i);
  expect(linkElement).toBeInTheDocument();
});
