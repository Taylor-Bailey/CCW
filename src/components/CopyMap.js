import React, { Component } from 'react'
import USAMap from "react-usa-map"
import './InteractiveMap.css'
import { GetAllStates } from './data.js'

class TNMap extends Component {  

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
                console.log("current State: ", currentState);
                return [reciprocity, noReciprocity, currentState];
            }).then((arrays) =>{
                console.log("array 2: ", arrays[2]);
                let longerArray = arrays[0].length > arrays[1].length ? arrays[0] : arrays[1]
                let testObj = {};
                for(let i = 0; i < longerArray.length; i++) {
                    testObj[arrays[0][i]] = {fill: "#594dff"};
                    testObj[arrays[1][i]] = {fill: "#fa2855"};
                    testObj[arrays[2]] = {fill: "#41e294"};
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
        
  export default TNMap

                    ///////Code Before Refactoring///////

      //     let FindReciprocity = (array, selectedState) => {
    //         array.forEach(stateObject => { 
    //             for (let key in stateObject) {
    //                 if (key === "abbreviation") {
    //                     if (stateObject[key] === selectedState) {
    //                         console.log("state reciprocity: ", stateObject.reciprocity);
    //                         return stateObject.reciprocity;
    //                     }
    //                         // console.log("reciprocity: ", stateObject.reciprocity);
    //                 }
    //             }
    //         });
    //     }

    //     let FindNoReciprocity = (array, selectedState) => {
    //        array.forEach(stateObject => {
    //            for (let key in stateObject) {
    //                if (key === "abbreviation") {
    //                    if (stateObject[key] === selectedState) {
    //                        console.log("state non reciprocity: ", stateObject.no_reciprocity);
    //                        return stateObject.no_reciprocity;
    //                    }
    //                }
    //            }
    //        });
    //    }  