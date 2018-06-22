import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import './BottomNavButton.css'

const BottomNavButton = (props) =>{
    return (
        <Grid.Column className="buttonColumn">
        <Segment   className="bottomButton">
            <img src={props.src} alt="Navigation Bar Icon"/>
        </Segment>
    </Grid.Column>
    )
}

export default BottomNavButton
