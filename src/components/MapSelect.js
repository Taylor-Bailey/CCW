import React from 'react'
import { Grid } from 'semantic-ui-react'
import MapSelectorButton from './MapSelectorButton.js'
import './MapSelect.css'

const MapSelect = () => (
    <Grid className="mapSelectorGrid" columns={5}>
      <Grid.Row className="mapSelectorRow" >
          <MapSelectorButton label="Reciprocity" />
          <MapSelectorButton label="II Carry" />
          <MapSelectorButton label="Shall Issue" />
          <MapSelectorButton label="May Issue" />
          <MapSelectorButton label="No Issue" />
        </Grid.Row>
    </Grid>
)
      
      export default MapSelect