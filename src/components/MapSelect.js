import React from 'react'
import { Grid } from 'semantic-ui-react'
import MapSelectorButton from './MapSelectorButton.js'

const MapSelect = () => (
    <Grid columns={5}>
      <Grid.Row >
          <MapSelectorButton label="ReciprocityMap" />
          <MapSelectorButton label="Constitutional Carry" />
          <MapSelectorButton label="Shall Issue" />
          <MapSelectorButton label="May Issue" />
          <MapSelectorButton label="No Issue" />
        </Grid.Row>
    </Grid>
      )
      
      export default MapSelect