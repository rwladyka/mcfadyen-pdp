import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeaderContext } from '../Header';
import Menu from './Menu';

let mockHeaderContextValue = {
  showMenu: false,
  setShowMenu: jest.fn(),
};

describe('<Menu />', () => {
  beforeEach(() => {
    mockHeaderContextValue = {
      showMenu: false,
      setShowMenu: jest.fn(),
    };
    mockHeaderContextValue.setShowMenu.mockClear();
  });

  it('renders closed menu', () => {
    render(
      <HeaderContext.Provider value={mockHeaderContextValue}>
        <Menu />
      </HeaderContext.Provider>
    );

    const menuElement = screen.getByTestId('menu');
    expect(menuElement).toHaveClass('w-0');

    const closeButton = screen.queryByTestId('btn-close');
    expect(closeButton).not.toBeInTheDocument();
  });

  it('renders open menu', () => {
    mockHeaderContextValue.showMenu = true;

    render(
      <HeaderContext.Provider value={mockHeaderContextValue}>
        <Menu />
      </HeaderContext.Provider>
    );

    const menuElement = screen.getByTestId('menu');
    expect(menuElement).toHaveClass('w-32');
  });

  it('calls closeMenu when close button is clicked', () => {
    mockHeaderContextValue.showMenu = true;

    render(
      <HeaderContext.Provider value={mockHeaderContextValue}>
        <Menu />
      </HeaderContext.Provider>
    );

    const closeButton = screen.getByTestId('btn-close');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(mockHeaderContextValue.setShowMenu).toHaveBeenCalledTimes(1);
  });

  it('calls closeMenu when overlay is clicked', () => {
    mockHeaderContextValue.showMenu = true;

    render(
      <HeaderContext.Provider value={mockHeaderContextValue}>
        <Menu />
      </HeaderContext.Provider>
    );

    const closeButton = screen.getByTestId('btn-close');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(mockHeaderContextValue.setShowMenu).toHaveBeenCalledTimes(1);
  });
});
