import React from 'react';
import './App.css';
import { Header, Home } from './common/components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { localizationData } from './resources/localization/localizationData';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;