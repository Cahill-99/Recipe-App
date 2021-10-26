import React from 'react';
import Landing from "./components/Landing";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './components/Main';

function App() {

    return (
      <Router>
      <div className = "wrapper">
        <h3>Logo Name</h3>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/main" exact component={Main}/>
        </Switch>
      </div>
      </Router>
    );
  }

      

export default App;