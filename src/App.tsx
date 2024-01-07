import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseRef from './hooks/useRef';
import Home from './home';
import Header from './header';
import './App.css';
import UseReducer from './hooks/useReducer';
import UseMemo from './hooks/useMemo';
import UseCallback from './hooks/useCallback';
import UseId from './hooks/useId';

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
            <Route path="/use-callback" element={<UseCallback />} />
            <Route path="/use-id" element={<UseId />} />
          </Routes>
        </Header>
      </Router>
    </>
  );
};

export default App;
