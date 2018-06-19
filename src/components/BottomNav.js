import React from 'react'
import BottomNavButton from './BottomNavButton'
import PermitButton from './../images/icons/permit.svg'
import MapButton from './../images/icons/map.svg'
import LawButton from './../images/icons/law.svg'
import "./BottomNav.css"
import { Grid, Segment } from 'semantic-ui-react'

let BottomNav = () => {
    return (
        <Grid className="bottomNav" columns='equal' divided inverted padded>
            <Grid.Row className="bottomNavRow" color='gray' textAlign='center'>
                <BottomNavButton src={PermitButton}/>
                <BottomNavButton src={MapButton}/>
                <BottomNavButton src={LawButton}/>
            </Grid.Row>
        </Grid>
    )
}

export default BottomNav



