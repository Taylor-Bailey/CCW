import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Heading from './components/Heading';
import Disclaimer from './components/Disclaimer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/disclaimer" component={Disclaimer} />
        </div>
      </Router>
    );
  }
}

export default App;
