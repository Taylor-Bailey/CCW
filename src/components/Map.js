import React, { Component } from 'react'
import Heading from './Heading.js'
import BottomNav from './BottomNav.js'
import MapInteraction from './MapInteraction.js'
import './Map.css'

class CarryMap extends Component {
  
    render() {
        console.log("is data in map.js?", this.props.activeState);
        return (
            <div>
                <Heading title="Map" />
                <MapInteraction activeState={this.props.activeState} />
                <BottomNav id="activeMapButton" />
            </div>
        )
    }
}

export default CarryMap
