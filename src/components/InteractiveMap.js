import React, { Component } from 'react'
import USAMap from "react-usa-map"
import './InteractiveMap.css'

class InteractiveMap extends Component {
    /* mandatory */
    mapHandler = (event) => {
      alert(event.target.dataset.name);
    };
   
    render() {
      return (
        <div className="usaMap">
          <USAMap />
        </div>
      );
    }
  }
   
  export default InteractiveMap