import React from 'react';
import Landing from "./components/Landing";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './components/Main';

function App() {

    return (
      <Router>
      <div className = "wrapper">
        <img className = "logo" src = "Images/Smart-chef-logo.png" alt = "Smart Chef Logo"></img>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/main" exact component={Main}/>
        </Switch>
      </div>
      </Router>
    );
  }

      

export default App;