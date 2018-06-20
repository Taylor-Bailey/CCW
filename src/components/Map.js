import React from 'react'
import Heading from './Heading.js'
import BottomNav from './BottomNav.js'
import MapInteraction from './MapInteraction.js'

const CarryMap = () => {
    return (
        <div>
            <Heading title="Map" />
            <MapInteraction />
            <BottomNav />
        </div>
    )
}

export default CarryMap
