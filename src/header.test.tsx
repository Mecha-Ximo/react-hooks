import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, afterEach } from 'vitest';
import Header from './header';
import { RouterWrapper } from './tests/utils/router';

describe('Test Header component', () => {
  const routes = [
    {
      path: '/test',
      element: (
        <Header>
          <p>Main</p>
        </Header>
      ),
    },
    {
      path: '/',
      element: (
        <Header>
          <p>Home</p>
        </Header>
      ),
    },
  ];

  afterEach(() => {
    cleanup();
  });

  test('Component renders', () => {
    render(<RouterWrapper initialPath="/test" routes={routes} />);

    expect(screen.getByText('Main')).toBeDefined();
    const backLink = screen.getByRole('link');
    expect(backLink).toBeDefined();
    expect(backLink.innerText).toBe('Back');
  });

  test('If pathname is "/" back link should not render', () => {
    render(<RouterWrapper initialPath="/" routes={routes} />);

    expect(screen.getByText('Home')).toBeDefined();
    expect(screen.queryByRole('link')).toBeNull();
  });

  test('If back link is pressed route should change to "/"', () => {
    render(<RouterWrapper initialPath="/test" routes={routes} />);
    expect(screen.queryByText('Home')).toBeNull();
    const backLink = screen.getByRole('link');

    fireEvent.click(backLink);

    expect(screen.queryByText('Home')).toBeDefined();
    expect(screen.queryByText('Main')).toBeNull();
  });
});
