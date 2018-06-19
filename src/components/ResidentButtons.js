import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import './ResidentButtons.css'

class ResidentButtons extends Component {
    state = {}
  
    handleClick = () => this.setState({ active: !this.state.active })
  
    render() {
      const { active } = this.state

        return(
            <Button.Group className="ResidentButtons">
                <Button>Resident</Button>
                <Button.Or />
                <Button>Non-Resident</Button>
            </Button.Group>
        )
    }
}

export default ResidentButtons
