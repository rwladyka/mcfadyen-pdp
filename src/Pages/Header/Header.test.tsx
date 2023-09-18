// Header.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('renders the Header component', () => {
    render(<Header />);

    expect(screen.getByText('My Company.com')).toBeInTheDocument();
    expect(screen.getByText('Accessories')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(4);
  });
});
