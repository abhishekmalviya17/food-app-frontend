import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Settings from './containers/Settings';
import Home from './components/layout/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
       <Routes>
       <Route path="/" element={<Settings />} />
       <Route path='/home' element={<Home />} />
       </Routes>
    
    </Router>
  );
}

export default App;
