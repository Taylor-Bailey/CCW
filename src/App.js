import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import './App.css'

import Heading from './components/Heading'
import Disclaimer from './components/Disclaimer'
import SelectState from './components/SelectState'
import Permit from './components/Permit.js'
import CarryMap from './components/Map.js'


class App extends Component {
  constructor(props){
    super(props)

    this.state = ({
      activeState: 42
    })
  }

    stateIndex = (activeState) => {
    this.setState({activeState: activeState})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/disclaimer" component={Disclaimer} />
          <Route exact path="/states" render={(props) => <SelectState activeState={this.stateIndex}/>} />
          <Route exact path="/permit" component={Permit} />
          <Route exact path="/map" render={(props) => <CarryMap activeState={this.state.activeState}/>} />
        </div>
      </Router>    );
  }
}

export default App;
