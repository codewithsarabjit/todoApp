import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/homepage/homepage.component';
import Login from './pages/login/login.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">      
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}

export default App;
