import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ShoppingList from './components/ShoppingList';

import AppNavbar from './components/AppNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppNavbar />
          <ShoppingList />
      </div>
    );
  }
}

export default App;
