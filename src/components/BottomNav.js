import React from 'react'
import BottomNavButton from './BottomNavButton'
import PermitButton from './../images/icons/permit.svg'
import MapButton from './../images/icons/map.svg'
import LawButton from './../images/icons/law.svg'
import "./BottomNav.css"

let BottomNav = () => {
    return (
        <div verticalAlign='middle' className="bottomNav">
            <BottomNavButton src={PermitButton} />
            <BottomNavButton src={MapButton}/>
            <BottomNavButton src={LawButton}/>
        </div>
    )
}

export default BottomNav


