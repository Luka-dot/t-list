import React, { Component } from 'react';

import MainView from './containers/mainView/mainView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <MainView />
      </div>
    );
  }
}

export default App;
