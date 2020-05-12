import React, { Component } from 'react';
import { Container, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ShoppingList from './components/ShoppingList';

import { Provider } from 'react-redux';
import store from './store';

import ItemModal from './components/ItemModal';
import AppNavbar from './components/AppNavbar';

import { loadUser } from './actions/auth';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <AppNavbar />
              <Container>
                <ItemModal />
                <ShoppingList />
              </Container>
          </div>
        </Provider>
    );
  }
}

export default App;
