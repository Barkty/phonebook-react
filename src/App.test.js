import { render, screen } from '@testing-library/react';
import AppMock from 'AppMock';

test('renders learn react link', () => {
  render(<AppMock />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
