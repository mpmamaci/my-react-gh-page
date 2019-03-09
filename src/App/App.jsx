import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import promodoro from '../resources/tomato.svg';
import Chiffre from '../Sites/MC2/MC2';
import './App.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          titel="designed by Freepik from Flaticon"
          src={promodoro}
          className="App-logo"
          alt="logo"
        />
        <p className="section subtitle is-small">designed by Freepik from Flaticon</p>
        <div className="columns">
          <a
            className="App-link column"
            href="http://tomato-timer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pomodoro Timer
          </a>
          <a className="App-link column is-half" href="/mc2">
            Advanced Vigenere
          </a>
        </div>
      </header>
    </div>
  );
}

function chiffre() {
  return <Chiffre />;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/mc2/" component={chiffre} />
      </div>
    </Router>
  );
}

export default AppRouter;