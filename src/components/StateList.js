import React, { Component } from 'react'
import './StateList.css'
import USA from '../images/icons/usa.svg'
import { Link } from 'react-router-dom'

let StateList  = (props) => {
            console.log("props list: ", props);
            console.log("where's the damn data?: ", props.list);
            let stateData = props.list.map((data, index)=>(
                <MappingStateData key={index} index={index} abbreviation={data.abbreviation} name={data.name} flag={data.flag} updateState={props.updateState}/>
            ))
                return (
                <div className="allStates">
                <img className="usaIcon" src={USA} alt="USA Map Icon" />
                        {stateData}
                </div>
                )
    }

    function MappingStateData(props) {
        const index = props.index
        return (
            <Link to='/map'>
                <div className="stateListDiv" key={props.index} id={props.index} onClick={(event) => props.updateState(index)}>
                    <div className="stateName">
                        <h2>{props.name}</h2>
                        <p>({props.abbreviation})</p>
                    </div>
                    <img className="flagImage" src={props.flag} alt={props.name} />
                </div>
            </Link>
        )
    }
    

                        

    export default StateList
    
