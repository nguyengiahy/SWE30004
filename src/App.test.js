import { render, screen } from '@testing-library/react';
import App from './App';
import {sum} from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/HELLO, THIS IS TEAM 8!/i);
  expect(linkElement).toBeInTheDocument();
});

test('sum function', () => {
  var a = 4
  var b = 5
  expect(sum(a,b)).toBe(9);
});