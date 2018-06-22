import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import BottomNavButton from './BottomNavButton'

import "./BottomNav.css"

import PermitButton from './../images/icons/permit.svg'
import MapButton from './../images/icons/map.svg'
import LawButton from './../images/icons/law.svg'

let BottomNav = (props) => {
    return (
        <Grid className="bottomNav" columns='equal' divided inverted padded>
            <Grid.Row className="bottomNavRow" >
            <Link className="linkDiv" to='/permit'>
                <BottomNavButton id={props.id} src={PermitButton}/>
            </Link>
            <Link className="linkDiv" to='/map'>
                <BottomNavButton id={props.id} src={MapButton}/>
            </Link>
                <BottomNavButton id={props.id} src={LawButton}/>
            </Grid.Row>
        </Grid>
    )
}

export default BottomNav



