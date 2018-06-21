import React, { Component }from 'react'
import MapSelect from './MapSelect.js'
import InfoModal from './InfoModal.js'
import InteractiveMap from './InteractiveMap.js'
import StateSelect from './MapStateSelect.js'
import TNMap from './CopyMap.js'
            
class MapInteraction extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            type: "reciprocity",
            stateIndex: 1
        };
    }
    render(){
        return(
            <div id="buttonBoot">
                <MapSelect />
                <InfoModal />
                <TNMap selectedState={this.state.stateIndex}/>
                <StateSelect />
            </div>
        )
    }
}

export default MapInteraction
           