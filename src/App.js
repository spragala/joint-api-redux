import React, { Component } from 'react';
import Header from './components/Header'
import Tarpy from './container/Tarpy'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tarpy />
      </div>
    );
  }
}

export default App;
