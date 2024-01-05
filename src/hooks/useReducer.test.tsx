import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';
import UseReducer from './useReducer';

describe('Test UseReducer component', () => {
  afterEach(() => {
    cleanup();
  });

  test('Component should render', () => {
    const screen = render(<UseReducer />);

    expect(screen.getByText('useReducer')).toBeDefined();
    expect(screen.getByTestId('count').textContent).toBe('Count: 0');
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
    expect(buttons[0].textContent).toBe('ADD');
    expect(buttons[1].textContent).toBe('CLEAR');
    expect(buttons[2].textContent).toBe('SUBTRACT');
  });

  test('If add button is pressed, the count should be increased', () => {
    const screen = render(<UseReducer />);
    const addButton = screen.getByText('ADD');
    expect(screen.getByTestId('count').textContent).toBe('Count: 0');

    fireEvent.click(addButton);

    expect(screen.getByTestId('count').textContent).toBe('Count: 1');
  });

  test('If subtract button is pressed, the count should be decreased', () => {
    const screen = render(<UseReducer />);
    const subtractButton = screen.getByText('SUBTRACT');
    expect(screen.getByTestId('count').textContent).toBe('Count: 0');

    fireEvent.click(subtractButton);

    expect(screen.getByTestId('count').textContent).toBe('Count: -1');
  });

  test('If clear button is pressed, the count should be restarted', () => {
    const screen = render(<UseReducer />);
    const subtractButton = screen.getByText('SUBTRACT');
    expect(screen.getByTestId('count').textContent).toBe('Count: 0');

    fireEvent.click(subtractButton);

    expect(screen.getByTestId('count').textContent).toBe('Count: -1');

    const clearButton = screen.getByText('CLEAR');
    fireEvent.click(clearButton);

    expect(screen.getByTestId('count').textContent).toBe('Count: 0');
  });
});
