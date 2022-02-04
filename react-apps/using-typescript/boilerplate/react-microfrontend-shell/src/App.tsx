import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Home } from './common/components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { localizationData } from './resources/localization/localizationData';
import { useConfig } from './common/utilities/configReader';
import { MicroFrontEnd } from './common/components/MicroFrontEnd';

function App() {
  const config: any = useConfig('app.config.json');
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          {config &&
            config.hosts &&
            config.hosts
              .filter((host: any) => host.isAvailable)
              .map((host: any) => (
                <Route
                  path={host.path}
                  key={host.url}
                  element={
                    <MicroFrontEnd hostName={host.name} hostUrl={host.url} history={history} />
                  }
                />
              ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
