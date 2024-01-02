import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseRef from './useRef/useRef';
import Home from './home';
import Header from './header';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/use-ref" element={<UseRef />} />
          </Routes>
        </Header>
      </Router>
    </>
  );
};

export default App;
