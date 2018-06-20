import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import Heading from './components/Heading'
import Disclaimer from './components/Disclaimer'
import SelectState from './components/SelectState'
import Permit from './components/Permit.js'
import CarryMap from './components/Map.js'
// import  { GetListOfStates }  from './components/data.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/disclaimer" component={Disclaimer} />
          <Route exact path="/select-state" component={SelectState} />
          <Route exact path="/permit-form" component={Permit} />
          <Route exact path="/map" component={CarryMap} />
        </div>
      </Router>
    );
  }
}

export default App;
