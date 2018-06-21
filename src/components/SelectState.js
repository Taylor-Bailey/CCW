import React, { Component } from 'react'
import Heading from './Heading'
import './SelectState.css'
import StateList from './StateList'
import { GetAllStates } from './data.js'

class SelectState extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            list: null,
            activeState: 1,
            dataLoaded: false
        };

        GetAllStates()
        .then((data) =>{
            console.log("GetAllStates data: ", data);
            this.setState({
                list: data,
                dataLoaded: true
            });
        })
    }

        updateState = (index) =>{
            this.setState ({activeState: index}, this.props.activeState(index))
            console.log("this is the index: ", index);
        }

        render(){
            if(this.state.dataLoaded){
                return (
                <div>
                    <Heading title="Select a State" />
                    <StateList list={this.state.list} updateState={this.updateState} />
                    </div>
                )
            }else{
                return(
                    <p>loading</p>
                )
            }
        };
}

export default SelectState