import { fireEvent, render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import SizeSelector from './SizeSelector';

jest.mock('react-redux');

describe('SizeSelector component', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('should render with no selection', () => {
    render(<SizeSelector />);

    expect(screen.getByTestId('selected-size').textContent).toBe('');
  });

  it('should render with the initial selected size', () => {
    const selectedSize = 'S';
    useSelectorMock.mockReturnValue(selectedSize);

    render(<SizeSelector />);

    const labelContent = screen.getByTestId('selected-size');
    expect(labelContent.textContent).toBe(selectedSize);

    expect(screen.getByTestId(`btn-select-size-${selectedSize}`)).toHaveClass(
      'bg-black'
    );
  });

  it('should disable size selection with no stock', () => {
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);

    render(<SizeSelector />);

    expect(screen.getByTestId('btn-select-size-M')).toHaveClass('text-grey');
    expect(screen.getByTestId('strike-size-oos-M')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('btn-select-size-M'));
    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });

  it('dispatches updateProductSize action when a size button is clicked', async () => {
    const selectedSize = 'S';
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);

    render(<SizeSelector />);

    fireEvent.click(screen.getByTestId(`btn-select-size-${selectedSize}`));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
