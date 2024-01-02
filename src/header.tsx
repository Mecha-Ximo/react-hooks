import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = (props: { children: ReactNode }) => {
  const location = useLocation();

  const isNotHome = location.pathname !== '/';

  return (
    <>
      {isNotHome && (
        <nav>
          <Link to="/">Back</Link>
        </nav>
      )}
      {props.children}
    </>
  );
};

export default Header;
