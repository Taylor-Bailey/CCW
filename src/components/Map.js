import React from 'react'
import Heading from './Heading.js'
import BottomNav from './BottomNav.js'
import MapSelect from './MapSelect.js'
import InfoModal from './InfoModal.js'
import InteractiveMap from './InteractiveMap.js'
import MapStateForm from './MapStateForm'

const CarryMap = () => {
    return (
        <div>
            <Heading title="Map" />
            <MapSelect />
            <InfoModal />
            <InteractiveMap />
            <MapStateForm />
            <BottomNav />
        </div>
    )
}

export default CarryMap
