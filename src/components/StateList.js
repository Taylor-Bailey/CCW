import React, { Component } from 'react'
import './StateList.css'
import { GetAllStates } from './data.js'
import USA from '../images/icons/usa.svg'

class StateList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            iconShowing: true,
            list: undefined,
            activeState: ""
        };
        GetAllStates()
        .then((data) =>{

            this.setState({
                list: data
            });
        })
        //binds showList function to StateList Componenet
        this.showList = this.showList.bind(this)
    }
        showList() {
            this.setState({
                iconShowing: false
            });
        }

        selectState() {
            this.setState({
                activeState: "{data.name}"
            })
        }
    
        render() {
            let {iconShowing, list} = this.state;
    
            if(!iconShowing) {
                let stateData = list.map((data, index)=>(
                    <div className="stateListDiv" key={index} id={index} onClick={(id)=>{
                        id = {index};
                        console.log("id:", id);
                    }}>
                        <div className="stateName">
                            <h2>{data.name}</h2>
                            <p>({data.abbreviation})</p>
                        </div>
                        <img className="flagImage" src={data.flag} alt={data.name} />
                    </div>
                ))
                return(
                    <div className="allStates">
                            {stateData}
                    </div>
                )
            }else if(iconShowing){
                return (
                    <div className="allStates">
                    <img className="usaIcon" onClick={this.showList} src={USA} alt="USA Map Icon" />
                    </div>
                )
            }
        }
    }

    export default StateList
    
