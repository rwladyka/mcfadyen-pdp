import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useViewport } from './useViewport';

describe('useViewport hook', () => {
  it('initializes deviceSize based on window.innerWidth', () => {
    const { result } = renderHook(() => useViewport());

    expect(result.current.deviceSize).toBe(window.innerWidth);
  });

  it('updates deviceSize when window is resized', () => {
    const { result } = renderHook(() => useViewport());

    act(() => {
      window.innerWidth = 800;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.deviceSize).toBe(800);
  });

  it('computes isMobile correctly based on deviceSize', () => {
    const { result } = renderHook(() => useViewport());

    act(() => {
      window.innerWidth = 800;
      window.dispatchEvent(new Event('resize'));
    });
    expect(result.current.isMobile).toBeTruthy();

    act(() => {
      window.innerWidth = 1200;
      window.dispatchEvent(new Event('resize'));
    });
    expect(result.current.isMobile).toBeFalsy();
  });
});
