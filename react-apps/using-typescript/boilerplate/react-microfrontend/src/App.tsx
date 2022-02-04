import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Home } from './common/components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { localizationData } from './resources/localization/localizationData';

function App(props: any) {
  return (
    <div className="app">
      <Router>
        {props.showMenu && <Header />}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
