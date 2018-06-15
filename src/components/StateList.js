import React, { Component } from 'react'
import './StateList.css'
import states from './../reciprocity.json'
import USA from '../images/icons/usa.svg'

class StateList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            iconShowing: true,
            list: states
        };
        //binds showList function to StateList Componenet
        this.showList = this.showList.bind(this)
    }
        showList() {
            this.setState({
                iconShowing: false
            });
        }
    
        render() {
            let {iconShowing, list} = this.state;
    
            if(!iconShowing) {
                let stateData = list.map((data, index)=>(
                    <div className="stateListDiv" key={index}>
                        <div className="stateName">
                            <h2>{data.name}</h2>
                            <p>({data.abbreviation})</p>
                        </div>
                        <img className="flagImage" src={data.flag} alt={data.name} />
                    </div>
                ))
                return(
                    <div>
                            {stateData}
                    </div>
                )
            }else if(iconShowing){
                return <img className="usaIcon" onClick={this.showList} src={USA} alt="USA Map Icon" />
            }
        }
    }

    export default StateList
    
