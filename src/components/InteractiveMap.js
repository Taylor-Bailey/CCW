import React, { Component } from 'react'
import USAMap from "react-usa-map"
import './InteractiveMap.css'
import { GetAllStates } from './data.js'

class InteractiveMap extends Component {
  
      constructor(props){
          super(props)
          
          this.state = {
              "config": {}
          }
          this.getMapColor()
      }
  
      getMapColor = () => {
          let selectedState = this.props.selectedState;
  
          GetAllStates()
              .then((resp) => {
                  let reciprocity = resp[selectedState].reciprocity;
                  let noReciprocity = resp[selectedState].no_reciprocity;
                  let currentState = resp[selectedState].abbreviation;

                  return [reciprocity, noReciprocity, currentState];
              }).then((arrays) =>{
                  let longerArray = arrays[0].length > arrays[1].length ? arrays[0] : arrays[1]
                  let testObj = {};
                  for(let i = 0; i < longerArray.length; i++) {
                      testObj[arrays[0][i]] = {fill: "#594dff"};
                      testObj[arrays[1][i]] = {fill: "#fa2855"};
                  }
                  console.log("test Object: ", testObj);
                  this.setState({config: testObj})
              })
      }
      render() {      
          return (
              <div className="usaMap">
                  <USAMap customize={this.state.config} />
              </div>
          );
      }
  };
            
  export default InteractiveMap