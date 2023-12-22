// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import GlobalStyles from './GlobalStyles';
import './index.css';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes for other pages */}
        </Routes>
      </Router>
      <GlobalStyles />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
