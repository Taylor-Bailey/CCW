import React, { Component } from 'react'
import USAMap from "react-usa-map"
import './InteractiveMap.css'


class TNMap extends Component {

    tnReciprocityRender = (abbreviation) => {
        {abbreviation: {
            fill: "rgb(89, 77, 255)"}
        }

        return {
            "NJ": {
              fill: "navy",
              clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
            },
            "NY": {
              fill: "#CC0000"
            }
          };
        };
   
    render() {
      return (
        <div className="usaMap">
          <USAMap customize={this.tnReciprocityRender()}/>
        </div>
      );
    }
  }
   
  export default TNMap