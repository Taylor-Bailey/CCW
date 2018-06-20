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
            state: "Tennessee"
        };
    }
    render(){
        return(
            <div>
                <MapSelect />
                <InfoModal />
                <TNMap />
                <StateSelect />
            </div>
        )
    }
}

export default MapInteraction
           