import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Heading from './components/Heading'
import Disclaimer from './components/Disclaimer'
import SelectState from './components/SelectState'
import Permit from './components/Permit.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/disclaimer" component={Disclaimer} />
          <Route exact path="/select-state" component={SelectState} />
          <Route exact path="/permit-form" component={Permit} />
        </div>
      </Router>
    );
  }
}

export default App;
