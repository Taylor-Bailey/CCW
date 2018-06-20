import React, { Component } from 'react'
import USAMap from "react-usa-map"
import './InteractiveMap.css'
import { GetAllStates } from './data.js'

class TNMap extends Component {   

    getMapColor = () => {
        let selectedState = this.props.selectedState;

        GetAllStates()
            .then((resp) => {
                let reciprocity = resp[selectedState].reciprocity;
                let noReciprocity = resp[selectedState].no_reciprocity;
                return [reciprocity, noReciprocity];
            }).then((arrays) =>{
                let longerArray = arrays[0].length > arrays[1].length ? arrays[0] : arrays[1]
                let testObj = {};
                for(let i = 0; i < longerArray.length; i++) {
                    testObj[arrays[0][i]] = {fill: "rgb(89, 77, 255)"};
                    testObj[arrays[1][i]] = {fill: "red"};
                }
                return testObj
            })
    }
    render() {        
        return (
            <div className="usaMap">
                <USAMap customize = {this.getMapColor()}/>
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