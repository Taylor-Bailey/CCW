import React, { Component }from 'react'
import MapSelect from './MapSelect.js'
import InfoModal from './InfoModal.js'
import InteractiveMap from './InteractiveMap.js'
import StateSelectButton from './MapStateSelect.js'

            
class MapInteraction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "reciprocity",
            stateIndex: 42
        };
    }

    render(){
        return(
            <div id="buttonBoot">
                <MapSelect />
                <InfoModal />
                <InteractiveMap selectedState={this.props.activeState}/>
                <StateSelectButton />
            </div>
        )
    }
}

export default MapInteraction
           