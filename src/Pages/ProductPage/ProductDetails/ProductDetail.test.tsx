import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductDetail from './';
import { PRODUCT_DETAILS } from '../../../constraints';

describe('ProductDetail />', () => {
  it('renders with the initial selected product detail', () => {
    render(<ProductDetail />);

    const initialDetail = PRODUCT_DETAILS[0];
    expect(screen.getByText(initialDetail.title)).toBeInTheDocument();
    expect(screen.getByText(initialDetail.content)).toBeInTheDocument();
  });

  it('should change content when a tab is selected', async () => {
    render(<ProductDetail />);

    const tabElement = screen.getByText(PRODUCT_DETAILS[1].title);
    fireEvent.click(tabElement);

    await waitFor(() => {
      expect(screen.getByText(PRODUCT_DETAILS[1].content)).toBeInTheDocument();
    });
  });
});
