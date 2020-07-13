import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainView from './containers/mainView/mainView';
import StartPage from './containers/startPage';
import ListSelection from './containers/listSelection';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/mainView" component={MainView} />
          <Route exact path="/listSelection" component={ListSelection} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
