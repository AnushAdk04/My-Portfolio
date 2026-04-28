import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio brand and navigation', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /Anush Adhikari/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /About/i }).length).toBeGreaterThan(0);
});
