import React, { Component } from 'react'
import USAMap from "react-usa-map"
import './InteractiveMap.css'
import { GetAllStates } from './data.js'
import { Dimmer, Loader } from 'semantic-ui-react'

class InteractiveMap extends Component {
  
      constructor(props){
          super(props)
          
          this.state = {
              "config": {},
              mapLoaded: false
          }
          this.getMapColor()
      }
  
      getMapColor = () => {
          let selectedState = this.props.selectedState;
  
          GetAllStates()
              .then((resp) => {
                  let reciprocity = resp[selectedState].reciprocity;
                  let noReciprocity = resp[selectedState].no_reciprocity;
                  let residentOnly = resp[selectedState].resident;
                  let enhanced =  resp[selectedState].enhanced;

                  return [reciprocity, noReciprocity, residentOnly, enhanced];
              }).then((arrays) =>{
                  let longerArray = arrays[0].length > arrays[1].length ? arrays[0] : arrays[1].length > arrays[2].length ? arrays[1] : arrays[2].length > arrays[3].length ? arrays[2] : arrays[3];
                  let testObj = {};
                  for(let i = 0; i < longerArray.length; i++) {
                      testObj[arrays[0][i]] = {fill: "#594dff"};
                      testObj[arrays[1][i]] = {fill: "#fa2855"};
                      testObj[arrays[2][i]] = {fill: "#e9d539"};
                      testObj[arrays[3][i]] = {fill: "#e79135"};
                  }
                  console.log("test Object: ", testObj);
                  this.setState({
                      config: testObj,
                      mapLoaded: true
                
                })
              })
      }
      render() {     
        if(this.state.mapLoaded){  
            return (
                <div className="usaMap">
                <USAMap customize={this.state.config} />
                </div>
            )
        }else{
            return(
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
            )
        }
      }
  };
            
  export default InteractiveMap