import React, {Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

function App() {
  return (
    <div className="container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo lighten-4">
            <a href="/" className="bran-logo center"> My Feed </a>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s8">
          <News type="everything" query="q=tesla&from=2021-05-20"/>
        </div>
        <div className="col s4">
          <Sidenews type="everything" query="domains=comicbookmovie.com&language=en"/>
        </div>
      </div>
    </div>
  );
}

export default App;
