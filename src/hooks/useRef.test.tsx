import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import UseRef from './useRef';
import * as REACT from 'react';

vi.mock('react', async () => {
  return await vi.importActual('react');
});

describe('Test UseRef component', () => {
  afterEach(() => {
    cleanup();
  });

  test('Component renders', () => {
    const screen = render(<UseRef />);

    expect(screen.queryByText('Use Ref Hook')).toBeDefined();
    const colorBox = screen.getByTestId('color-box');
    expect(colorBox).toBeDefined();
    expect(colorBox.style.width).toBe('200px');
    expect(colorBox.style.height).toBe('200px');
    expect(screen.getByText('Change color')).toBeDefined();
  });

  test('Box is initialized with red color', () => {
    const screen = render(<UseRef />);

    const colorBox = screen.getByTestId('color-box');

    expect(colorBox.style.backgroundColor).toBe('red');
  });

  test('Box color is updated when button is clicked', () => {
    const screen = render(<UseRef />);
    const colorBox = screen.getByTestId('color-box');
    const button = screen.getByRole('button');
    expect(colorBox.style.backgroundColor).toBe('red');

    fireEvent.click(button);
    expect(colorBox.style.backgroundColor).toBe('blue');

    fireEvent.click(button);
    expect(colorBox.style.backgroundColor).toBe('green');

    fireEvent.click(button);
    expect(colorBox.style.backgroundColor).toBe('red');
  });
});
