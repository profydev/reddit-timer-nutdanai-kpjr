import React from 'react';
import './globalStyles.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Header from './header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Search() {
  return (
    <div>
      <h2>Search</h2>
    </div>
  );
}

export default App;
