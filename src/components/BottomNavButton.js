import React from 'react'
import { Button } from 'semantic-ui-react'
import './BottomNavButton.css'

const BottomNavButton = (props) =>{
    return (
        <Button verticalAlign='middle' className="bottomButton">
            <img  verticalAlign='middle' src={props.src}/>
        </Button>
    )
}

export default BottomNavButton
