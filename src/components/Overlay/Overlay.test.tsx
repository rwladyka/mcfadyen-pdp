import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Overlay from './Overlay';
import userEvent from '@testing-library/user-event';

describe('<Overlay />', () => {
  it('renders correctly when show is true', () => {
    const onClickMock = jest.fn();
    render(<Overlay show={true} onClick={onClickMock} />);

    const overlayElement = screen.getByTestId('overlay');
    expect(overlayElement).toBeInTheDocument();
    expect(overlayElement).toHaveClass('w-full h-full opacity-70');

    userEvent.click(overlayElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders correctly when show is false', () => {
    const onClickMock = jest.fn();
    render(<Overlay show={false} onClick={onClickMock} />);

    const overlayElement = screen.getByTestId('overlay');
    expect(overlayElement).toBeInTheDocument();
    expect(overlayElement).toHaveClass('opacity-0 w-0 h-0');

    userEvent.click(overlayElement);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
