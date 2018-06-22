import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Segment } from 'semantic-ui-react'
import BottomNavButton from './BottomNavButton'

import "./BottomNav.css"

import PermitButton from './../images/icons/permit.svg'
import MapButton from './../images/icons/map.svg'
import LawButton from './../images/icons/law.svg'

let BottomNav = () => {
    return (
        <Grid className="bottomNav" columns='equal' divided inverted padded>
            <Grid.Row className="bottomNavRow" color='gray' textAlign='center'>
            <Link to='/permit'>
                <BottomNavButton src={PermitButton}/>
            </Link>
            <Link to='/map'>
                <BottomNavButton src={MapButton}/>
            </Link>
                <BottomNavButton src={LawButton}/>
            </Grid.Row>
        </Grid>
    )
}

export default BottomNav



