import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './MapStateSelect.css'

const MapStateForm = () => {
  return (
    <Link to='/select-state'>
      <Button id="stateSelectButton" type='submit'>Select A Different State</Button>
    </Link>
  )
    
}

export default MapStateForm