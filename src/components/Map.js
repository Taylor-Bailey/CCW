import React from 'react'
import Heading from './Heading.js'
import BottomNav from './BottomNav.js'
import MapSelect from './MapSelect.js'

const CarryMap = () => {
    return (
        <div>
            <Heading title="Map" />
            <MapSelect />
            <BottomNav />
        </div>
    )
}

export default CarryMap
