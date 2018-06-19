import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import './MapSelectorButton.css'

class MapSelectorButton extends Component {
  state = {}

  handleClick = () => this.setState({ active: !this.state.active })

  render() {
    const { active } = this.state

    return (
        <Grid.Column className="mapSelectorColumn" width={3}>
            <Button className="mapSelectorButton" ></Button>
            <p>{this.props.label}</p>
        </Grid.Column>
    )
  }
}

export default MapSelectorButton


// <Button className="mapSelectorButton" toggle active={active} onClick={this.handleClick}>
// </Button>
// <p>{this.props.label}</p>