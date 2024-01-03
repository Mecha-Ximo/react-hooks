import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/use-reducer">useReducer</Link>
          </li>
          <li>
            <Link to="/use-ref">useRef</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Home;
