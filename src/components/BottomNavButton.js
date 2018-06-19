import React from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'
import './BottomNavButton.css'

const BottomNavButton = (props) =>{
    return (
        <Grid.Column className="buttonColumn">
        <Segment  className="bottomButton">
            <img src={props.src} />
        </Segment>
    </Grid.Column>
    )
}

export default BottomNavButton
