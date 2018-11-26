import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Productos from './Productos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
         <Switch>
         <Route exact path="/items" component={Productos}/>
         </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
