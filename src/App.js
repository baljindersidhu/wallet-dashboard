import React from 'react';
import Sidenav from './components/sidenav/Sidenav';
import {LandingPage, LandingPageBackdrop} from './components/landing-page/LandingPage';
import './App.css';

function App() {
  return (
    <div className="container">
      <Sidenav/>
      <LandingPageBackdrop/>
      <LandingPage/>
    </div>
  );
}

export default App;
