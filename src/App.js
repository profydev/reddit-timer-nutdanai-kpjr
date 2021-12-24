import React from 'react';
import './globalStyles.css';
import {
  BrowserRouter as Router, Routes, Route, useParams,
} from 'react-router-dom';
import Header from './header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search/:keyword" element={<Search />} />
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
  const { keyword = 'javascript' } = useParams();
  return (
    <div>
      <h2>{keyword}</h2>
    </div>
  );
}

export default App;
