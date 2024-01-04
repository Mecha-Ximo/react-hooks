import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseRef from './hooks/useRef';
import Home from './home';
import Header from './header';
import './App.css';
import UseReducer from './hooks/useReducer';
import UseMemo from './hooks/useMemo';

const App = () => {
  return (
    <>
      <Router>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/use-ref" element={<UseRef />} />
            <Route path="/use-reducer" element={<UseReducer />} />
            <Route path="/use-memo" element={<UseMemo />} />
          </Routes>
        </Header>
      </Router>
    </>
  );
};

export default App;
