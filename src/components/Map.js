import React from 'react'
import Heading from './Heading.js'
import BottomNav from './BottomNav.js'
import MapSelect from './MapSelect.js'
import InfoModal from './InfoModal.js'

const CarryMap = () => {
    return (
        <div>
            <Heading title="Map" />
            <MapSelect />
            <InfoModal />
            <BottomNav />
        </div>
    )
}

export default CarryMap
