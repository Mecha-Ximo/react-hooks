import { Link } from 'react-router-dom';

type HookLink = {
  path: `/use-${string}`;
  title: string;
};

const hookLinks: HookLink[] = [
  {
    path: '/use-reducer',
    title: 'useReducer',
  },
  {
    path: '/use-ref',
    title: 'useRef',
  },
  {
    path: '/use-memo',
    title: 'useMemo',
  },
  {
    path: '/use-callback',
    title: 'useCallback',
  },
  {
    path: '/use-id',
    title: 'useId',
  },
];

const Home = () => {
  return (
    <main>
      <nav>
        <ul>
          {hookLinks.map((link) => (
            <li key={link.title}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Home;
