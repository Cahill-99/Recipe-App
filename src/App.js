import React from 'react';
import Landing from "./components/Landing";
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom';
import Main from './components/Main';
import Recipe from './components/Recipe';

function App() {

    return (
      <Router basename='/Recipe-App'>
      <div className = "wrapper">
        <img className = "logo" src = "Images/Smart-chef-logo.png" alt = "Smart Chef Logo"></img>
        <HashRouter>
          <Route path="/" exact component={Landing}/>
          <Route path="/main" exact component={Main}/>
          <Route path="/recipe" exact component={Recipe}/>
        </HashRouter>
      </div>
      </Router>
    );
  }

      

export default App;