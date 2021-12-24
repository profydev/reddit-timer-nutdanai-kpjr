import React from 'react';
import './globalStyles.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>

        </ul>

        <hr />

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
