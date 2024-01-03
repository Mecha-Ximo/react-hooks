import { ReactElement } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

/**
 * Wrap react elements in a router context.
 * @param initialPath - the initial router path
 * @param routes - the different elements to be render under a certain path
 * @returns a different elements wrapped in a router
 */
export function RouterWrapper(props: {
  initialPath: string;
  routes: { path: string; element: ReactElement }[];
}): ReactElement {
  return (
    <MemoryRouter initialEntries={[props.initialPath]}>
      <Routes>
        {props.routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </MemoryRouter>
  );
}
